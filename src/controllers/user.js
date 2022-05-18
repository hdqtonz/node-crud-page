const User = require('../model/user')

// get All user controller
const allUser = async (req,res)=>{

    try{
        const { page = 1, limit = 10} = req.query

        const users = await User.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        // .sort({
        //     firstname : 1
        // })
        res.status(200).json({total: users.length, users})

    }catch(err){
        res.json(err)
    }
}



// get single user controller
const oneUser = async (req,res)=>{
    
    try{
        const _id = req.params.id
        const oneUser = await User.findById(_id)
        res.json(oneUser)

    }catch(err){
        res.json({err:error})
    }
}

// Update user controller
const updateUser = async (req,res)=>{
    try{
         const _id = req.params.id
         const updateUser = await User.findByIdAndUpdate(_id , req.body, {new:true})
 
         res.json(updateUser)
 
    }catch(err){
         res.json({err:error})
    }
 }

//  Add user controller
 const addUser = async (req,res)=>{
    try{
        const user = new User(req.body)
        const userAdd = await user.save()
        res.json(userAdd)
    }catch(err){
        res.json({err:error})
    }
}

// Delete user controller
const deleteUser = async (req,res)=>{
    try{
        const _id = req.params.id

        const delteStudnet = await User.findByIdAndDelete(_id)

        res.json({'message':'User Deleted'})

    }catch(err){
        res.json({err:error})
    }
}

module.exports= {allUser, oneUser, updateUser, addUser, deleteUser}