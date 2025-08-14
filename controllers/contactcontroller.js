const asynchandler = require("express-async-handler")
const contact = require("../models/contactmodel.js");

const getcontacts = asynchandler(async (req,res) =>{
    const contacts = await contact.find({user_id:req.user.id});
    res.status(200).json(contacts);
})

const createcontacts = asynchandler(async (req,res) =>{
    // console.log(req.body);
    const {
        name,
        email,
        phone,
    } = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required");
    }

    const contact1 = await contact.create({
        name,email,phone,
        user_id:req.user.id,
    });
    res.status(201).json(contact1);
});

const getcontact = asynchandler(async (req,res) =>{
    const contact1 = await contact.findById(req.params.id);
    if(!contact1){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json(contact1);
});

const updatecontact = asynchandler(async (req,res) =>{
    const contact1 = await contact.findById(req.params.id);
    if(!contact1){
        res.status(404);
        throw new Error("contact not found");
    }

    if(contact1.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user donot have permission")
    }

    const updatedcontact = await contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedcontact);
});

const deletecontact = asynchandler(async (req,res) =>{
    const contact1 = await contact.findById(req.params.id);
    if(!contact1){
        res.status(404);
        throw new Error("contact not found");
    }

    if(contact1.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user donot have permission")
    }

    await contact.findOneAndDelete(contact1);
    res.status(200).json(contact1);
})

module.exports = {
    getcontacts,
    createcontacts,
    getcontact,
    updatecontact,
    deletecontact
}