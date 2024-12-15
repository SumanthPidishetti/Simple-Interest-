function doIntrest() {
    let firstnumber=document.getElementById("p").value
    let Secondnumber=document.getElementById("t").value
    let thirdnumber=document.getElementById("r").value
    let Intrest=(eval(firstnumber*Secondnumber*thirdnumber)/100)
    document.getElementById("div1").innerHTML=Intrest
}
