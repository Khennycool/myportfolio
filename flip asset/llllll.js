var Questionbank = [
    {
        question:'Q.1  Who is the CEO of Appclik ?',
        quest:'Question 1 of 5', 
        option:['ifeolua', 'Seyi Adeleke', 'Tinubu', 'Shetima'],
        answer:'Seyi Adeleke'
    },
    {
        question:'Q.2  What is the capitl of Oyo ?',
        quest:'Question 2 of 5',
        option:['Ibadan', 'Osogbo', 'Lagos', 'Ondo'],
        answer:'Ibadan'
    },
]
var button = document.querySelectorAll('button')
// document.getElementById('')
// document.querySelector(',')
var text1 = document.querySelector('.text')
var ife1 = document.querySelector('.ife')
var seyi1 = document.querySelector('.seyi')
var tinu1 = document.querySelector('.tinu')
var shet1 = document.querySelector('.shet')
var que1 = document.querySelector('.que')
var i = 0;
function displayquestion(){

    for(var a=0;a<button.length;a++){
button[a].style.background='none'
    }
   
    text1.innerHTML = Questionbank[i].question;
    ife1.innerHTML = Questionbank[i].option[0];
    seyi1.innerHTML = Questionbank[i].option[1];
    tinu1.innerHTML = Questionbank[i].option[2];
    shet1.innerHTML = Questionbank[i].option[3]
    que1.innerHTML = Questionbank[i].quest;
}
displayquestion()

var score = 0;
score.innerHTML = 0;
var div = document.querySelector('.div1')
var next = document.querySelector('.btn1')

//how to calculate score
function calcsc(check){
if(check.innerHTML == Questionbank[i].answer && score < Questionbank.length){
score+=1;

score+=1 == sc.innerHTML++

check.classList.add('limegreen')
// console.log(score);
}
else{
    // document.getelementbyid(check.id).style.background='red'
    check.classList.add('red')
}

setTimeout(nextquestion, 500)
}



//function to display 
function nextquestion(){
    if (i < Questionbank.length -1){
        i++;
        displayquestion()
    }
    else{
        sb.style.display ='block'
        ansbank.style.display ='none'
        div.style.display ='none'

    }
}

next.addEventListener('click', nextquestion)

function backtoquiz(){
    location.reload();
}



