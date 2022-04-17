var clear = document.querySelector('#delete');
var square = document.querySelector('#square');
var division = document.querySelector('#division');
var backspace = document.querySelector('#backspace');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var mult = document.querySelector('#mult');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var minus = document.querySelector('#minus');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var plus = document.querySelector('#plus');
var percent = document.querySelector('#percent');
var zero = document.querySelector('#zero');
var dot = document.querySelector('#dot');
var equal = document.querySelector('#equal');

var output = document.querySelector('.calc-output');

var dotUsed = false;
var plusUsed = false;
var minusUsed=false;
var multUsed=false;
var divUsed=false;
var opUsed=false;
var squareUsed=false;
var percentUsed=false;
var x,sum,y,z,op;

zero.addEventListener('click',function(){
    if(output.textContent !== '0'){
        output.textContent +=0;
    }
});
one.addEventListener('click',function(){
    if(output.textContent === '0'){
        output.textContent = 1;
        console.log(output);
    }else{
        output.textContent +=1;
    }
})
two.addEventListener('click',function(){
    if(output.textContent === '0'){
        output.textContent = 2;
    }else{
        output.textContent +=2;
    }
})
three.addEventListener('click',function(){
    if(output.textContent === '0'){
        output.textContent = 3
    }else{
        output.textContent +=3
    }
})
four.addEventListener('click',function(){
    if(output.textContent === '0'){
        output.textContent = 4;
    }else{
        output.textContent +=4;
    }
})
five.addEventListener('click',function(){
    if(output.textContent === '0'){
        output.textContent = 5;
    }else{
        output.textContent +=5;
    }
})
six.addEventListener('click',function(){
    if(output.textContent === '0'){
        output.textContent = 6;
    }else{
        output.textContent += 6;
    }
})
seven.addEventListener('click',function(){
    if(output.textContent ==='0'){
        output.textContent = 7;
    }else{
        output.textContent += 7;
    }
})
eight.addEventListener('click',function(){
    if(output.textContent ==='0'){
        output.textContent = 8;
    }else{
        output.textContent += 8;
    }
})
nine.addEventListener('click',function(){
    if(output.textContent ==='0'){
        output.textContent = 9;
    }else{
        output.textContent += 9;
    }
})
dot.addEventListener('click',function(){
    if(!dotUsed){
        output.textContent += '.';
    }
    dotUsed=true;
})




plus.addEventListener('click',function(){
    x=output.textContent.slice(-1);
    if(!plusUsed && !opUsed){
        z = Number(output.textContent);
        output.textContent += '+';
         dotUsed = false;
         plusUsed = true;
         minusUsed=false;
         multUsed=false;
         divUsed=false;
         squareUsed=false;
         percentUsed = false;
         opUsed=true;
        op = '+';
        
    }
    else if(!plusUsed && opUsed){
        console.log('d')
        if(isNaN(x)){
            output.textContent=output.textContent.slice(0,-1);
            output.textContent += '+';
             dotUsed = false;
             plusUsed = true;
             minusUsed=false;
             multUsed=false;
             divUsed=false;
             squareUsed=false;
             percentUsed = false;
             op = '+';
             opUsed=true;
        }
    }   
})
minus.addEventListener('click',function(){
    x=output.textContent.slice(-1);
    if(!minusUsed && !opUsed){
        z = Number(output.textContent);
        output.textContent += '-';
         dotUsed = false;
         plusUsed = false;
         minusUsed=true;
         multUsed=false;
         divUsed=false;
         squareUsed=false;
         percentUsed = false;
         opUsed=true;
        op = '-';
    }
    else if(!minusUsed && opUsed){
        if(isNaN(x)){
            output.textContent=output.textContent.slice(0,-1);
            output.textContent += '-';
             dotUsed = false;
             plusUsed = false;
             minusUsed=true;
             multUsed=false;
             divUsed=false;
             squareUsed=false;
             percentUsed = false;
             opUsed=true;
            op = '-';
        }
    }   
})
mult.addEventListener('click',function(){
    x=output.textContent.slice(-1);
    if(!multUsed && !opUsed){
        z = Number(output.textContent);
        output.textContent += '*';
         dotUsed = false;
         plusUsed = false;
         minusUsed=false;
         multUsed=true;
         divUsed=false;
         squareUsed=false;
         percentUsed = false;
         op = '*';
         opUsed=true;
    }
    else if(!multUsed && opUsed){
        
        if(isNaN(x)){
            console.log('f')
            output.textContent=output.textContent.slice(0,-1);
            output.textContent += '*';
             dotUsed = false;
             plusUsed = false;
             minusUsed=false;
             multUsed=true;
             divUsed=false;
             squareUsed=false;
             percentUsed = false;
             op = '*';
             opUsed=true;
        }
    }   
})
division.addEventListener('click',function(){
    x=output.textContent.slice(-1);
    if(!divUsed && !opUsed){
        z = Number(output.textContent);
        output.textContent += '/';
         dotUsed = false;
         plusUsed = false;
         minusUsed=false;
         multUsed=false;
         divUsed=true;
         squareUsed=false;
         percentUsed = false;
         op = '/';
         opUsed=true;
    }
    else if(!divUsed && opUsed){
        if(isNaN(x)){
            output.textContent=output.textContent.slice(0,-1);
            output.textContent += '/';
             dotUsed = false;
             plusUsed = false;
             minusUsed=false;
             multUsed=false;
             divUsed=true;
             squareUsed=false;
             percentUsed = false;
             op = '/';
             opUsed=true;
        }
    }   
})
square.addEventListener('click',function(){
    x=output.textContent.slice(-1);
    if(!opUsed && !squareUsed){
        z = Number(output.textContent);
        output.textContent += '^2';
         dotUsed = false;
         plusUsed = false;
         minusUsed=false;
         multUsed=false;
         divUsed=false;
         squareUsed=true;
         percentUsed = false;
         opUsed=true;
        op = '^2';
    }
    else if(!multUsed && opUsed){
        
        if(isNaN(x)){
            console.log('f')
            output.textContent=output.textContent.slice(0,-1);
            output.textContent += '^2';
             dotUsed = false;
             plusUsed = false;
             minusUsed=false;
             multUsed=false;
             divUsed=false;
             squareUsed=true;
             percentUsed = false;
             opUsed=true;
            op = '^2';
        }
    } 

    
})
percent.addEventListener('click',function(){
    x=output.textContent.slice(-1);
    if(!opUsed && !percentUsed){
        z = Number(output.textContent);
        output.textContent += '%';
         dotUsed = false;
         plusUsed = false;
         minusUsed=false;
         multUsed=false;
         divUsed=false;
         squareUsed=false;
         percentUsed = true;
         opUsed=true;
        op = '%';
    }
    else if(!multUsed && opUsed){
        
        if(isNaN(x)){
            console.log('f')
            output.textContent=output.textContent.slice(0,-1);
            output.textContent += '%';
             dotUsed = false;
             plusUsed = false;
             minusUsed=false;
             multUsed=true;
             divUsed=false;
             percentUsed = true;
             opUsed=true;
            op = '%';
        }
    } 

    
})


backspace.addEventListener('click', function(){
    var event ;
    if(output.textContent.length != 1){
        event = output.textContent.slice('-1');
        output.textContent = output.textContent.slice(0,-1);
    }
    else{
        output.textContent = 0;
    }
    switch(event){
        case '+':plusUsed=false,opUsed=false;break;
        case '-':minusUsed=false,opUsed=false;break;
        case '*':multUsed=false,opUsed=false;break;
        case '/':divUsed=false,opUsed=false;break;
        case '^2':squareUsed=false,opUsed=false;break;
        case '%':percentUsed=false,opUsed=false;break;
        case '.':dotUsed=false,opUsed=false;break;
    }
})
equal.addEventListener('click', function(){
    if(plusUsed){
        z=String(z);
        len =z.length;
        y = output.textContent.slice(len+1);
        z=Number(z);
        y=Number(y);
        sum= z + y;
        output.textContent = sum;
        plusUsed=false;
    }
    else if(minusUsed){
        z=String(z);
        
        len =z.length;
        y = output.textContent.slice(len+1);
        z=Number(z);
        y=Number(y);
        sum=z- y;
        output.textContent = sum;
        minusUsed=false;
    }
    else if(multUsed){
        z=String(z);
        
        len =z.length;
        y = output.textContent.slice(len+1);
        z=Number(z);
        y=Number(y);
        sum=z*y;
        output.textContent = sum;
        multUsed=false;
    }
    else if(divUsed){
        z=String(z);
        
        len =z.length;
        y = output.textContent.slice(len+1);
        z=Number(z);
        y=Number(y);
        sum=z/y;
        output.textContent = sum;
        divUsed=false;
    }
    else if(squareUsed){
        z=String(z);
        
        len =z.length;
        y = output.textContent.slice(len+1);
        z=Number(z);
        y=Number(y);
        sum=z*z;
        output.textContent = sum;
        squareUsed=false;
    }
    else if(percentUsed){
        z=String(z);
        
        len =z.length;
        y = output.textContent.slice(len+1);
        z=Number(z);
        y=Number(y);
        sum=z/y*100;
        output.textContent = sum;
        squareUsed=false;
    }
    sum = String(sum);
    if(sum.indexOf('.') !== -1){
        dotUsed = true;
    }
    dotUsed = false;
    plusUsed = false;
    minusUsed=false;
    multUsed=false;
    divUsed=false;
    squareUsed=false;
    percentUsed=false;
    opUsed=false;

})
clear.addEventListener('click',function(){
    output.textContent=0;


    dotUsed = false;
    plusUsed = false;
    minusUsed=false;
    multUsed=false;
    divUsed=false;
    squareUsed=false;
    percentUsed=false;
    opUsed=false;

    x = null;
    sum=null;
    y=null;
    z=null;
    op=null;

})
