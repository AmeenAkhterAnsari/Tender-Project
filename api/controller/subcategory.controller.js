import '../models/connection.js';
import UserSchemaModel from '../models/user.model.js';
import SubCategorySchemaModel from '../models/subcategory.model.js';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export var save=async (req,res,next)=>{
    var subcategoryDetails=req.body;
    var caticon=req.files.caticon;
    var subcaticonname=Date.now()+"-"+caticon.name;
    var uploadpath=path.join(__dirname,"../../UI/public/assets/uploads/subcaticons",subcaticonname);
    caticon.mv(uploadpath);
    var scList = await SubCategorySchemaModel.find();
    var l=scList.length;
    var _id=l==0?1:scList[l-1]._id+1;
    var subcategoryDetails={...subcategoryDetails,"_id":_id,"subcaticonnm":subcaticonname};
    var subcategory = await SubCategorySchemaModel.create(subcategoryDetails);
    if(subcategory)
      return res.status(201).json({"result":"SubCategory added successfully...."});
    else
      return res.status(500).json({"result": "Server Error"});
 }
 
export var fetch = async(req,res,next)=>{
    var SCDetails = url.parse(req.url,true).query;
    var SCList = await SubCategorySchemaModel.find(SCDetails);
    var l=SCList.length;
    if(l!=0)
    return res.status(201).json(SCList);
    else
    return res.status(500).json({error:"Resource Not Found"});
    
} 

export var deleteSubCategory = async(req,res,next)=>{
    var id = req.params.id;
    var SCDetails= await SubCategorySchemaModel.find({_id:id});
    var l=SCDetails.length;
    if(l!=0){
        var result = await SubCategorySchemaModel.deleteMany({_id:id});
        if(result)
        return res.status(201).json({"msg":"Succesfully Delete SubCategory"});
        else
        return res.status(500).json({error:"Resource Not Found"});
    }else
    return res.status(404).json({error:"Server Error"});
}

export var update = async(req,res,next)=>{ 
    var SCDetails = await SubCategorySchemaModel.find({_id:req.body._id});
    if(SCDetails){
    let id= req.body._id;
    delete req.body._id;
    var result = await SubCategorySchemaModel.updateMany({_id:id},{$set:req.body});
    if(result)
    return res.status(201).json({"msg":"Succesfully update SubCategory"});
    else
    return res.status(500).json({error:"Resource Not Found"});
}else
return res.status(404).json({error:"Server Error"});
}