
let buttons=document.querySelectorAll("button");
let input=document.getElementById("input-box");



function calculator(){
    let s=this.value;
    if(s==="="){

        try{
            let ans=eval(input.value);
            input.value=ans;

        }
        catch(e){
            input.value="Error";
        }
        
    }
    else if(s==="AC"){
        input.value="";
    }
    else if(s==="DEL"){
        let ans=input.value;
        ans=ans.substring(0,ans.length-1);
        input.value=ans;
    }
    else{
        input.value+=s;
    }
   

}
buttons.forEach((element)=>{
    element.addEventListener("click",calculator);
})