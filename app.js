const express=require("express");
const fs=require("fs");
const appl=express();
const path=require("path");
const port=80;

appl.use(express.urlencoded());
appl.use('/static',express.static('stat'));

appl.set('view engine','pug');
appl.set('views',path.join(__dirname,'views'));

appl.get('/',(req,res)=>{
      res.status(200).render('index.pug');
})

appl.post('/',(req,res)=>{
      name=req.body.name;
      surname=req.body.surname;
      number=req.body.number;
      email=req.body.email;
      address=req.body.address;
      
      let outputSTR=`The name of the client is ${name} ${surname}, contact number is ${number}, Email ID is ${email} and address is ${address} . \n\n`;
      fs.appendFileSync('output.txt',outputSTR);

      const data={'message':'Your Form has been submitted successfully'};
      res.status(200).render('index.pug');
})

appl.listen(port,()=>{
      console.log(`the application started successfully on port ${port}`);
})
