const express = require("express");

const app = express();
const cors=require("cors")
const bodyParser = require('body-parser');
 const dotenv=require("dotenv").config();
 

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
}
 

const authRoute=require("./routes/auth.js")
const productRoute=require("./routes/productAuth.js")
const orderRoute=require("./routes/orderRout.js")
const cartRout=require("./routes/cartRout.js")
const categoryRout=require("./routes/categoryRout.js")
const newuserauth=require("./routes/user")



app.use(cors(corsOptions));

require("./database/conn");

const port = process.env.PORT;




app.use(bodyParser.json());
app.use("/api", authRoute);
app.use("/api/product", productRoute);


app.use("/api/order", orderRoute);
app.use("/api/cart", cartRout);
app.use("/api/category", categoryRout);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.post('/signup', userController.signup)
// app.post('/signin', userController.signin)
// app.post('/submit-otp', userController.submitotp)
// app.post('/send-otp', userController.sendotp)


//routes
app.use("/api/newuser", newuserauth);

app.listen(port, () => console.log(`my project is running at ${port} server`));


















// app.get("/profile", verifyToken, function (req, res) {
//   res.send("welcome to register page");
// });

//login

// app.post("/loginPage", formidable(), async function (req, res) {
//   const { email, password } = req.fields;
//   if (!(email && password)) {
//     res.status(400).send("fill all the details");
//   } else {
//     let user = await register.findOne({ email });
//     if (user && (await bcrypt.compare(password, user.password))) {
//       let usertoken = jwt.sign({ email }, process.env.TOKEN_KEY, {
//         expiresIn: "6h",
//       });
//       user.token = usertoken;
//       res.status(200).send("logged in" + " " + user);
//     } else {
//       res.status(403).send("Incorrect password or userName");
//     }
//   }
// });

//product
// app.post("/product", formidable(), function (req, res) {
//   const { productId, productName, numberOfProduct, price } = req.fields;

//   if (!(productId && productName && numberOfProduct && price)) {
//     res.status(400).send("provide the all fields");
//   } else {
//     let data = product.create({
//       productId: req.fields.productId,
//       productName: req.fields.productName,
//       numberOfProduct: req.fields.numberOfProduct,
//       price: req.fields.price,
//     });
//     res.status(200).send(" product database created");
//   }
// });

// app.listen(port, () => console.log(`my project is running at ${port} server`));
