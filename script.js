let tem=["15", "23", "18", "27", "30", "25", "19", "22", "28", "16", "20", "24", "21", "29", "17"]

let text= ""

for ( i=0;i<tem.length;i++){

    text += + tem[i]*9/5+32 +"<br>"
}
document.getElementById("output").innerHTML= " Celsius to Fahrenheit" + "<br> " +text

