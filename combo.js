
var code= [Math.round(Math.random()*1),Math.round(Math.random()*1),Math.round(Math.random()*1),Math.round(Math.random()*1)];
console.log(code)
//slot 1 function
document.getElementById('dot1').addEventListener("click" , a)
    var value1 =0
    function a(){
        if(value1==0){
            document.getElementById('dot1').style.backgroundColor ="Black"
            value1++
        }
        else if(value1==1){
        document.getElementById('dot1').style.backgroundColor ="White"
        value1--
        }
        }

//slot 2 function
    document.getElementById('dot2').addEventListener("click" , b)
    var value2 =0
    function b(){
        if(value2==0){
            document.getElementById('dot2').style.backgroundColor ="Black"
            value2++
        }
        else if(value2==1){
        document.getElementById('dot2').style.backgroundColor ="White"
        value2--
        }
        }

//slot 3 function

    document.getElementById('dot3').addEventListener("click" , c)
    var value3 =0
    function c(){
        if(value3==0){
            document.getElementById('dot3').style.backgroundColor ="Black"
            value3++
        }
        else if(value3==1){
        document.getElementById('dot3').style.backgroundColor ="White"
        value3--
        }
        }

//slot 4 function

    document.getElementById('dot4').addEventListener("click" , d)
    var value4 =0
    function d(){
        if(value4==0){
            document.getElementById('dot4').style.backgroundColor ="Black"
            value4++
        }
        else if(value4==1){
        document.getElementById('dot4').style.backgroundColor ="White"
        value4--
        }
        }

document.getElementById('check').addEventListener("click", o)
    var y = 0
    var igr = true;
function o(){
    var i = 0
    //num1
    if(igr == true){
    var acombo =[ value1 , value2 , value3 , value4 ]
    if(acombo[0]==code[0]){
        i++
    }
    else{

    }
    //num2
    if(acombo[1]==code[1]){
        i++
    }
    else{

    }
    //num3
    if(acombo[2]==code[2]){
        i++
    }
    else{

    }
    //num4
    if(acombo[3]==code[3]){
        i++
    }
    else{

    }
    document.getElementById('guess').innerHTML = i +" nodes are in the right place!";
    if((acombo[0]==code[0]) && (acombo[1]==code[1]) && (acombo[2]==code[2]) && (acombo[3]==code[3])){
        document.getElementById('head').innerHTML = "You Cracked the Combo!"
        document.getElementById('body').style.background = "rgb(35, 138, 35)";
        document.getElementById('replay').style.display ="block"
        igr =false;
        y++
    }
    else{
        y++
        
        
    }


    document.getElementById('at').innerHTML = "Attempt #" + y;
    

}}
document.getElementById('replay').addEventListener("click" , replay);
function replay(){
    location.reload();
}




