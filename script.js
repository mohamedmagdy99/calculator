const num=Array.from(document.getElementById("numbers").querySelectorAll("button"));
const show=document.getElementById("show");
show.value="";
let butid;
let array=new Array;
let arr=new Array;
let ope;
let lastbutton;
function add(a,b){
    return a+b;
}
function mult(a,b){
    return a*b;
}
function sub(a,b){
    let sub;
    if(a>b){
        sub=a-b;
    }
    else{
        sub=b-a
   }
   return sub;
}
function divid(a,b){
    return a/b;
}
function operate(op,a,b){
    if(op=="-"){
        return sub(a,b);
    }
    else if(op=="+"){
        return add(a,b);
    }
    else if(op=="*"){
        return mult(a,b);
    }
    else if(op=="/"){
        return divid(a,b);
    }
    else{
        return "kosomk";
    }
}
function pro(a){
    if(a=="+" || a=="-"){
        return 1;
    }
    else{
        return 2;
    }
}

num.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        butid=button.id;
        if("*/-+".indexOf(butid) != -1){
            let z;
            lastbutton=1;
            while(arr.length && pro(arr.length-1)>=pro(butid)){
                z=operate(arr.pop(),array.pop(),array.pop())
                array.push(z);
            }
            arr.push(butid)
            show.value+=butid;
        }
        else if(butid=="equal"){ 
            while(arr.length){
                z=operate(arr.pop(),array.pop(),array.pop())
                array.push(z);
            }
            show.value=array.pop();
        }
        else if(butid=="clear"){
            lastbutton=0;
            show.value="";
        }
        else if("1234567890".indexOf(butid) != -1 && lastbutton==2){
            let z;
            let x=array.pop();
            z=x.toString()+butid;
            array.push(parseInt(z));
            show.value+=butid;
        }
        else if(".".indexOf(butid) != -1 && lastbutton==2 || lastbutton==3){
            let z;
            let x;
            
            if(lastbutton==2){
                x=array.pop();
                z=x.toString()+butid;
                array.push(z);
            }
            else{
                let y=array.pop();
                z=y+butid;
                array.push(parseFloat(z));
            }
            show.value+=butid;
            lastbutton=3;
        }
        else{
            lastbutton=2;
            array.push(parseInt(butid));
            show.value+=butid;
        }


    })
})