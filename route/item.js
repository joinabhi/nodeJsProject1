const express=require('express');
const itemController=require('../controller/item');
const router=express.Router()

router.post('/user/add-item', itemController.addItem);

router.get('/user/get-item', itemController.getItem);

router.delete('/user/delete-item/:id', itemController.deleteItem);

module.exports=router;