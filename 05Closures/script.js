
function outer(){
    var x=10;
    function inner(){
        console.log(x);
    }
    return inner;
}
var call=outer();
call();








/*

outer()() or var x=outer(),x()
no matter where the variable is placed up or down
block scope let also forms the closure as same as it is
for the parameter is alsow forms the closure
if outer function also nested still it forms the closurec
conflictiong name in global =>inner varibal only form the closure when the varibal not presented in the inner then it goes for the outer function
data hidding in closure

 */