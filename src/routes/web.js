const express=require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello concac!')
  })
  
router.get('/ejs', (req, res) => {
    res.render("sample")
  })
  
module.exports=router;  