// =====================
// CARD HOVER
// =====================

document
.querySelectorAll(".card")
.forEach((card)=>{

card.addEventListener(
"mouseenter",
()=>{
card.style.transform="translateY(-5px)";
}
);

card.addEventListener(
"mouseleave",
()=>{
card.style.transform="translateY(0)";
}
);

});

// =====================
// BUTTON HERO
// =====================

const btn1 =
document.querySelector(".btn1");

if(btn1){

btn1.addEventListener(
"click",
()=>{
console.log("Video Kampanye");
}
);

}

const btn2 =
document.querySelector(".btn2");

if(btn2){

btn2.addEventListener(
"click",
()=>{
console.log("Mulai Self Check");
}
);

}

// =====================
// VISITOR COUNTER
// =====================

let visitor =
localStorage.getItem("visitorCount");

if(!visitor){

visitor = 1;

}else{

visitor = parseInt(visitor)+1;

}

localStorage.setItem(
"visitorCount",
visitor
);

const visitorBox =
document.getElementById("visitorCount");

if(visitorBox){

visitorBox.innerText =
visitor;

}

// =====================
// CHALLENGE
// =====================

const tasks =
document.querySelectorAll(".task");

const progressBar =
document.getElementById("progressBar");

const progressText =
document.getElementById("progressText");

const badge =
document.getElementById("badge");

function updateProgress(){

if(!tasks.length) return;

let checked = 0;

tasks.forEach(task=>{

if(task.checked){

checked++;

}

});

const percent =
(checked/tasks.length)*100;

if(progressBar){

progressBar.style.width =
percent+"%";

}

if(progressText){

progressText.innerText =
checked+" / "+tasks.length+
" selesai";

}

if(badge){

if(checked===tasks.length){

badge.style.display="block";

}else{

badge.style.display="none";

}

}

localStorage.setItem(
"challengeData",
JSON.stringify(
[...tasks].map(
task=>task.checked
)
)
);

}

const savedChallenge =
JSON.parse(
localStorage.getItem(
"challengeData"
)
);

if(savedChallenge){

tasks.forEach(
(task,index)=>{

task.checked =
savedChallenge[index];

}
);

}

tasks.forEach(task=>{

task.addEventListener(
"change",
updateProgress
);

});

updateProgress();

// =====================
// DOWNLOAD SERTIFIKAT
// =====================

function downloadCertificate(){

const usernameInput =
document.getElementById(
"username"
);

const username =
usernameInput
? usernameInput.value
: "Peserta";

const date =
new Date()
.toLocaleDateString(
"id-ID"
);

const certificate = `
<html>

<head>

<title>Sertifikat</title>

<style>

body{
font-family:Arial;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background:#f5f5f5;
}

.certificate{
width:800px;
padding:50px;
background:white;
border:10px solid gold;
text-align:center;
}

h1{
color:#6d28d9;
}

.name{
font-size:32px;
font-weight:bold;
margin:20px 0;
}

</style>

</head>

<body>

<div class="certificate">

<h1>
🏆 CERTIFICATE OF ACHIEVEMENT
</h1>

<h2>
Diberikan Kepada
</h2>

<div class="name">
${username}
</div>

<p>

Telah berhasil
menyelesaikan Challenge
7 Hari Bermain Sehat.

</p>

<p>

Tanggal:
${date}

</p>

<h3>
Main Boleh,
Kecanduan Jangan
</h3>

</div>

</body>

</html>
`;

const win =
window.open(
"",
"_blank"
);

win.document.write(
certificate
);

win.document.close();

win.print();

}