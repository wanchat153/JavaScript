let age = prompt("กรุณากรอกอายุของคุณ");
if(age > 13)
{
    // เครื่องหมาย \ คือยังไม่จบคำสั่ง เป็นแค่ " ภายใน
    document.getElementById("content").innerHTML = "<iframe width=\"1054\" height=\"593\" src=\"https://www.youtube.com/embed/uwalRG5gOGs\" title=\"Luffy Gear 5 NIKA vs Dragon Kaido 4K 60fps Luffy cant stop laughing | One Piece Episode 1071\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
}
else
{
    document.getElementById("content").innerHTML = "คุณอายุน้อยกว่า 13 ปี"
}