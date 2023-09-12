// let qrt = prompt("จำนวนสินค้า")
// let sum = 0
// for(var i = 1; i <= qrt; i++)
// {
//     let item_price = prompt("ราคาสินค้าชิ้นที่ " + i)
//     sum = sum + parseInt(item_price)
//     document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่" + i + ":" + item_price +"บาท"+"<br>"
// }
// document.getElementById("result").innerHTML = "ราคารวม " + sum + "บาท"

// while(prompt("ถ้าจะออกพิมพ์ Q") != "Q")
// {
//     document.getElementById("result").innerHTML += "ไม่ได้พิมพ์ Q <br>"
// }

function toCelsius() {
    let fah = prompt("ใส่อุณหภูมิเป็นฟาเรนไฮน์")
    let celsius = (fah - 32) * 5 / 9
    document.getElementById("result").innerHTML = celsius.toFixed(2) + " °C"
}

function toFahrenheit(){
    let cel = prompt("ใส่อุณหภูมิเป็นองศาเซลเซียส")
    let Fahrenheit = cel * (9 / 5) + 32
    document.getElementById("result").innerHTML = Fahrenheit.toFixed(2) + " °F"
}

let VAL = prompt("แปลงอุณหภูมิ เป็นอะไร °F to °C = C หรือ °C to °F = F")
if (VAL == "C") {
    toCelsius()
}
else if (VAL == "F") {
    toFahrenheit()
}

function getAge()
{
    //ส่งค่า 24 กลับไปที่ getAge
    return 24
}
alert(getAge())