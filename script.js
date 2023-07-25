let heart_btn=document.getElementsByClassName("heart-btn")
let plus_btn=document.getElementsByClassName("plus-btn")
let minus_btn=document.getElementsByClassName("minus-btn")
let Quant=document.getElementsByClassName("Quant")
let prices=[1379,176,249]
let finalPrice=document.getElementById("finalPrice")
let deletee=document.getElementsByClassName("deletee")

for (let index = 0; index < heart_btn.length; index++) 

// heart like
heart_btn[index].addEventListener("click",function(){
    if(heart_btn[index].syle.color==="red"){
        heart_btn[index].style.color="black"
    }
    else{
        heart_btn[index].style.color="red"
    }
})
//plus Button
plus_btn[index].addEventListener("click",function(){
    Quant[index].value=Number(Quant[index].value)+1
})
//Minus button 
minus_btn[index].addEventListener("click",function(){
    if (Quant[index].value=='1'){
        Quant[index].value=Number(Quant[index].value)-1
        finalPrice.value=Number(finalPrice.value)-(prices)[index]
    }
})
