import  express from "express";
const router=express.Router();
import * as userController from '../controller/user.controller.js';

router.post("/save",userController.save);

router.get("/fetch",userController.fetch);

router.delete("/delete/:id",userController.deleteUser);

router.patch("/update",userController.updateUser);

router.post("/login",userController.login);

/*router.post("/save",(req,res,next)=>{
userController.save(req.body).then((result)=>{
    console.log(result);
    }).catch((err)=>{
    console.log(err);
    });
}) */

/*router.post("/save",(req,res,next)=>{
userController.save(req.body,(err,result)=>{
    
   })
}) */
export default router;