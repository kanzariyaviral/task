const express=require('express')
const router = express.Router();
const JtoE=require('./../controller/JtoE.controller')

router.post('/jsonTOExcel',JtoE.jsonToExcel)

module.exports=router