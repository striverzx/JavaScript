setTimeout(function(){
    console.log("timer after 5 sec")

},5000);



function y(a){
    console.log("y");
    a();
}

y(function(){
    console.log("x");
})

