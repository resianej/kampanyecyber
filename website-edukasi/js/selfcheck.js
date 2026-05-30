const soal=[

"Main lebih lama dari rencana?",

"Tugas tertunda karena game?",

"Sulit berhenti?",

"Sering begadang?",

"Prioritas terganggu?",

"Memikirkan game terus?",

"Main untuk lari dari masalah?",

"Kesal saat disuruh berhenti?",

"Waktu tidur berkurang?",

"Aktivitas lain ditinggalkan?"

]

const quiz=
document.getElementById(
"quiz"
)

soal.forEach(

(s,i)=>{

quiz.innerHTML+=`

<div class="question">

<p>

${i+1}. ${s}

</p>

<div class="option">

<label>

<input
type="radio"
name="q${i}"
value="1">

<span>

Ya

</span>

</label>

<label>

<input
type="radio"
name="q${i}"
value="0">

<span>

Tidak

</span>

</label>

</div>

</div>

`

}

)

function hitung(){

let skor=0

let isi=0

for(

let i=0;

i<10;

i++

){

let pilih=

document.querySelector(

`input[name=q${i}]:checked`

)

if(pilih){

isi++

skor+=
Number(
pilih.value
)

}

}

if(isi<10){

alert(
"Isi semua dulu"
)

return

}

let teks=""

if(skor<=3){

teks=
"🟢 Kebiasaan bermain masih cukup seimbang."

}

else if(skor<=7){

teks=
"🟡 Mulai atur pola bermain."

}

else{

teks=
"🔴 Bermain mulai terlalu dominan."

}

document
.getElementById(
"hasil"
)

.style.display=
"block"

document
.getElementById(
"hasil"
)

.innerHTML=

`

<div class="score">

${skor}/10

</div>

<div class="result">

${teks}

</div>

`

document
.getElementById(
"bar"
)

.style.width=

`${skor*10}%`

}