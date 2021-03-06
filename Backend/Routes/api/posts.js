import express from 'express';
const router = express.Router();

router.get('/test',(req,res)=>{
    res.json({msg:"Posts from user"});
})

router.get('test/customer',()=>{
    res.json({hello:"hello"});
})

router.post("test/hello",()=>{
    res.json({h1:"this is h1"});
});

router.post('newpost',(res,req)=>{
    res.json({
        new:"post"
    });
});

router.all("new ",(res,req)=>{
    res.json({
        hee:"hello hehe"
    });
});

//  add routes for the posts

export default router;