// let qrt = prompt("จำนวนสินค้า")
// let sum = 0
// for(var i = 1; i <= qrt; i++)
// {
//     let item_price = prompt("ราคาสินค้าชิ้นที่ " + i)
//     sum = sum + parseInt(item_price)
//     document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่" + i + ":" + item_price +"บาท"+"<br>"
// }
// document.getElementById("result").innerHTML = "ราคารวม " + sum + "บาท"

while(prompt("ถ้าจะออกพิมพ์ Q") != "Q")
{
    document.getElementById("result").innerHTML += "ไม่ได้พิมพ์ Q <br>"
}