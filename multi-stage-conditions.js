var money = 30;
var danishPrice = 45;
var bread = 35;
var biscuit = 20;

if(danishPrice < money){
    console.log('Danish');
}
else if (bread < money){
    console.log('bread');
}
else if(biscuit < money){
    console.log('biscuit');
}
else{
    console.log('False');
}