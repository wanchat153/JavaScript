let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?");
let correctCount = 0;
let wrongCount = 0;

for (let i = 0; i < round; i++) {
    const answer = prompt("รอบที่ " + (i + 1) + ": หัว หรือ ก้อย ?");
    //Math.floor() เพื่อปัดลงเป็นจำนวนเต็ม ถ้าน้อยกว่าหรือเท่ากับ 4 มีโอกาส 50/50 //? คือตัวดำเนินการเงื่อนไข valueIfTrue : valueIfFalse;
    const random_answer = Math.floor(Math.random() *10) <= 4? "หัว" : "ก้อย";

    if (answer === random_answer) 
    {
        document.getElementById("game-list").innerHTML += "รอบที่ " + (i + 1) + ": " +"คุณตอบ :"+ random_answer + " | " +"ออก :" + answer + " - ตอบถูก! ยินดีด้วย<br>";
        correctCount++;
    }
    else
    {
        document.getElementById("game-list").innerHTML += "รอบที่ " + (i + 1) + ": " +"คุณตอบ :"+ random_answer + " | " +"ออก :" + answer + " - ตอบผิด! เสียใจด้วย<br>";
        wrongCount++;
    }
}

document.getElementById("game-list").innerHTML += "สรุปผล: ตอบถูก " + correctCount + " รอบ และตอบผิด " + wrongCount + " รอบ";