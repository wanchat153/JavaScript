let score = prompt("คะแนนของคุณ : ")
if(score >= 80)
{
    document.getElementById("grade").innerHTML = "คุณได้เกรด A"
}
else if(score >= 70)
{
    document.getElementById("grade").innerHTML = "คุณได้เกรด B"
}
else if(score >= 60)
{
    document.getElementById("grade").innerHTML = "คุณได้เกรด C"
}
else if(score >= 50)
{
    document.getElementById("grade").innerHTML = "คุณได้เกรด D"
}
else if(score >= 0)
{
    document.getElementById("grade").innerHTML = "คุณได้เกรด F"
}else
{
    document.getElementById("grade").innerHTML = "Error"
}

//กำหนด, เงื่อนไข, เพิ้ม
for(var counter = 0; counter < 5; counter++)
{
    console.log(counter)
}
console.log("End")