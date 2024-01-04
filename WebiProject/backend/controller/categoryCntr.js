const Category=require("../model/category")



const createCatogary=async(req,res)=>{
try {
    const newCategary=await Category.create(req.body)
    res.json(newCategary)
} catch (error) {
    throw new Error(error);
}
}

const updateCatogary=async(req,res)=>{
    const {id}=req.params;
    try {
        const updateCategary=await Category.findByIdAndUpdate(id,req.body,{new:true})
        res.json(updateCategary)
    } catch (error) {
        throw new Error(error);
    }
    }

    
const deleteCatogary=async(req,res)=>{
    const {id}=req.params;
    try {
        const deleteCatogary=await Category.findByIdAndDelete(id)
        res.json(deleteCatogary)
    } catch (error) {
        throw new Error(error);
    }
    }

    const getCatogary=async(req,res)=>{
        const {id}=req.params;
        try {
            const getCatogary=await Category.findById(id)
            res.json(getCatogary)
        } catch (error) {
            throw new Error(error);
        }
        }

        const getAllCatogary=async(req,res)=>{
           
            try {
                const getAllCatogary=await Category.findById()
                res.json(getAllCatogary)
            } catch (error) {
                throw new Error(error);
            }
            }
    

module.exports={createCatogary,updateCatogary,deleteCatogary,getCatogary,getAllCatogary}
