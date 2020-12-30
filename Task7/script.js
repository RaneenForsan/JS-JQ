var count=0;
function checkresult(){
if (document.getElementById('r1').checked) {
  rate_value = document.getElementById('r1').value;
    if(rate_value=="C"){
        count+=1;}
}

if (document.getElementById('r2').checked) {
  rate_value = document.getElementById('r2').value;
    if(rate_value=="CSS"){
        count+=1;
    }
}  
    
    
if (document.getElementById('r3').checked) {
  rate_value = document.getElementById('r3').value;
    if(rate_value=="1"){
        count+=1;
    }
} 
    
if (document.getElementById('r4').checked) {
  rate_value = document.getElementById('r4').value;
    if(rate_value=="All"){
        count+=1;
    }
} 
    
if (document.getElementById('r5').checked) {
  rate_value = document.getElementById('r5').value;
    if(rate_value=="Library"){
        count+=1;
    }
}
    var x=document.write("<center>"+"<div style='width:400px;border:2px solid #ddd;height:300px;border-radius:20px'>"+"<h1 style='background:#7D6572;color:white;width:300px;padding:15px;border-radius:30px'>Result</h1>"+"<h1>Your score is :"+count+"/5"+"</h1>"+"<div>"+"</center>");
     
}
