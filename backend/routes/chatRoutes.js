const express=require('express');
const router=express.Router();
const {accessChat,fetchChats}=require("../controllers/chatControllers");
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect,accessChat);
router.route('/').get(protect,fetchChats);




module.exports=router;