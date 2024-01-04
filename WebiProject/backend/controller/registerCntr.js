const register = require("../model/register");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const createReg = async (req, res) => {
  const {
    userId,
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  } = req.fields;
  console.log(req.fields);

  if (
    !(
      userId &&
      firstName &&
      lastName &&
      email &&
      phoneNumber &&
      password 
    )
  ) {
    res.status(400).send("provide the all fields");
  } else {
    if (await register.findOne({ email: email })) {
      res.send("registers already exits");
    } else {
      let enc_password = await bcrypt.hash(req.fields.password, 10);
      const user = await register.create({
        userId: userId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: enc_password,
      });

      let token = jwt.sign({ email }, process.env.TOKEN_KEY, {
        expiresIn: "6h",
      });
      user.token = token;
      res.status(200).json(user);
    }
  }
};
//loginPage
const loginPage = async (req, res) => {
  const { email, password } = req.fields;
  if (!(email && password)) {
    res.status(400).send("fill all the details");
  } else {
    let user = await register.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      let usertoken = jwt.sign({ email }, process.env.TOKEN_KEY, {
        expiresIn: "6h",
      });
      user.token = usertoken;
      res.status(200).send("logged in" + " " + user);
    } else {
      res.status(403).send("Incorrect password or userName");
    }
  }
};




// forgetpassword

const forgetpassword = async (req, res) => {
  const { email } = req.fields;

  // Step 3: Generate Token
  const token = crypto.randomBytes(20).toString('hex');

  // Step 4: Token Expiration (e.g., 1 hour)
  const tokenExpiration = Date.now() + 100*60*60;

  try {
      // Step 5: Save Token and Expiration in the User Model
      const user = await register.findOneAndUpdate({ email },
         {
         
           resetPasswordToken: token,
            resetPasswordExpires: tokenExpiration
           },
           { new: true });

      if (!user) {
          return res.send('User not found');
      }
      console.log(token);
      // Step 6: Send Email with Reset Link
      const transporter = nodemailer.createTransport({
        host: "najeersab2000@gmail.com",
          service: 'gmail',
          port: 587,
          auth: {
              user: 'najeersab2000@gmail.com',
              pass: 'mndzxbudhmmzdcwn',
          },
      });

      const mailOptions = {
          from: 'najeersab2000@gmail.com',
          to: user.email,
          subject: 'Password Reset',
          text: `Click the following link to reset your password: http://localhost:3000/reset-password/${token},`
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.error(error);
          } else {
              console.log('Email sent: ' + info.response);
          }
      });

      res.send('forgotPassword  email sent');
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
}

//resetpassword


const resetpassword =async (req, res) => {
  const token = req.params.token;
  const newPassword = req.body.password;

  // Verify the token and expiration here

  try {
      // Step 7: Update Password in the Database
      const user = await register.findOneAndUpdate(
          { resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } },
          { password: null, resetPasswordToken: null, resetPasswordExpires: null },
          { new: true }
      );

      if (!user) {
          return res.send('Invalid or expired token');
      }

      res.send('Password reset successfully');
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
}



// resetGetpassword


const resetGetpassword = async (req, res) => {
  try {
    const { token } = req.params;

    // Find the user by the reset password token and check if it's not expired
    const user = await register.findOne({
      resetPasswordToken: token,

      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    // Render a password reset form or redirect to a page with the form
    res.send(token); // Adjust based on your frontend setup
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

























module.exports = {
  createReg,
  loginPage,
  forgetpassword,
  resetpassword,
  resetGetpassword,
};
