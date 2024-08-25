const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.get('/bfhl', (req, res) => {
  const operationCode = 1;
  res.json({operation_code: operationCode });
});
app.post('/bfhl', (req, res) => {
    const d=req.body.data;
    console.log(d);
    var alpha=[]
    var nums=[]
    var hgh="";
    for(var i=0;i<d.length;i++){
        var chk= parseInt(d[i]);
        if(!isNaN(chk)){
            nums.push(chk);
        }
        else{
            alpha.push(d[i]);
            if(hgh==""&&d[i].toLowerCase()==d[i])hgh=d[i];
            if(hgh>d[i]&&d[i].toLowerCase()==d[i])hgh=d[i];
        }
    }
  

  res.json({
    is_success: true,
    user_id: "shivank_pandey_18072003",
    email :"shivank.pandey2021@vitstudent.ac.in",
    roll_number:"21BKT0021",
    numbers: nums,
    alphabets: alpha,
    "highest_lowercase_alphabet":hgh
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
