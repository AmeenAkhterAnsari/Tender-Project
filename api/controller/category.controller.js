import '../models/connection.js';
import CategorySchemaModel from '../models/category.model.js';
import url from 'url';
import path from 'path';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export var save=async (req,res,next)=>{
   var categoryDetails=req.body;
   var caticon=req.files.caticon;
   var caticonname=Date.now()+"-"+caticon.name;
   var uploadpath=path.join(__dirname,"../../UI/public/assets/uploads/caticons",caticonname);
   caticon.mv(uploadpath);
   var cList = await CategorySchemaModel.find();
   var l=cList.length;
   var _id=l==0?1:cList[l-1]._id+1;
   var categoryDetails={...categoryDetails,"_id":_id,"caticonnm":caticonname};
   var category = await CategorySchemaModel.create(categoryDetails);
   if(category)
     return res.status(201).json({"result":"Category added successfully...."});
   else
     return res.status(500).json({"result": "Server Error"});
}

export var update= async(req,res,next)=>{
   var categoryDetails = await CategorySchemaModel.find({_id: req.body._id});
   if(categoryDetails){
   let id = req.body._id ;
   delete req.body._id;
   var category= await CategorySchemaModel.updateMany({_id:id},{$set:req.body});
   if(category)
      return res.status(201).json({"msg":"success"});
   else
      return res.status(500).json({error:"server error"});
   }
   else
   return res.status(404).json({error:"Resource Not Found"});
}

export var deleteCategory= async(req,res,next)=>{
   var id= req.params.id;
   var category=await CategorySchemaModel.find({_id:id});
   if(category.length!=0){
      var result = await CategorySchemaModel.deleteMany({_id:id});
    if(result)
      return res.status(201).json({"msg":"success"});
   else
      return res.status(500).json({error:"server error"});
   }
   else
   return res.status(404).json({error:"Invalid request"});
}



export var fetch =async(req,res,next)=>{
   var categoryDetails= url.parse(req.url,true).query;
   var cList= await CategorySchemaModel.find(categoryDetails);
   var l=cList.length;
   if(l!=0)
   return res.status(201).json(cList);
   else
   return res.status(500).json({error:"Resource not found"});
}


