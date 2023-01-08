//Juho Leppäkangas

//asetetaan tulokseksi 0
var score = 0;


function check1(){

//Käyttäjä voi vastata vain kerran
    document.getElementById("oikein1").disabled = true
    document.getElementById("väärin1").disabled = true
    document.getElementById("väärin2").disabled = true
    document.getElementById("väärin3").disabled = true

//oikeat vastaukset kerrotaan ja lisätään 1 piste
if(document.getElementById("oikein1").checked){
    texttoshow = "Aivan oikein, kuvassa on leopardi.";
    document.getElementById("answer1").innerHTML=texttoshow;
        score++;}

//Väärästä vastauksesta näytetään eri teksti 
if(document.getElementById("väärin1").checked){
    texttoshow = "Väärin, oikea vastaus on leopardi.";
    document.getElementById("answer1").innerHTML=texttoshow;}
if(document.getElementById("väärin2").checked){
    texttoshow = "Väärin, oikea vastaus on leopardi.";
    document.getElementById("answer1").innerHTML=texttoshow;}
if(document.getElementById("väärin3").checked){
    texttoshow = "Väärin, oikea vastaus on leopardi.";
    document.getElementById("answer1").innerHTML=texttoshow;}

}

function check2(){

//Käyttäjä voi vastata vain kerran

    document.getElementById("oikein2").disabled = true
    document.getElementById("väärin6").disabled = true
    document.getElementById("väärin5").disabled = true
    document.getElementById("väärin4").disabled = true

//oikeat vastaukset kerrotaan
if(document.getElementById("oikein2").checked){
    texttoshow = "Aivan oikein, kuvassa on merikotka.";
    document.getElementById("answer2").innerHTML=texttoshow;
        score++;}

//Väärästä vastauksesta näytetään eri teksti 
if(document.getElementById("väärin4").checked){
    texttoshow = "Väärin, oikea vastaus on merikotka.";
    document.getElementById("answer2").innerHTML=texttoshow;}
if(document.getElementById("väärin5").checked){
    texttoshow = "Väärin, oikea vastaus on merikotka.";
    document.getElementById("answer2").innerHTML=texttoshow;}
if(document.getElementById("väärin6").checked){
    texttoshow = "Väärin, oikea vastaus on merikotka.";
    document.getElementById("answer2").innerHTML=texttoshow;}
}
function check3(){

//Käyttäjä voi vastata vain kerran

    document.getElementById("oikein3").disabled = true
    document.getElementById("väärin7").disabled = true
    document.getElementById("väärin8").disabled = true
    document.getElementById("väärin9").disabled = true

//oikeat vastaukset kerrotaan
if(document.getElementById("oikein3").checked){
    texttoshow = "Aivan oikein, kuvassa on Hirvi.";
    document.getElementById("answer3").innerHTML=texttoshow;
        score++;}

//Väärästä vastauksesta näytetään eri teksti 
if(document.getElementById("väärin7").checked){
    texttoshow = "Väärin, oikea vastaus on hirvi.";
    document.getElementById("answer3").innerHTML=texttoshow;}
if(document.getElementById("väärin8").checked){
    texttoshow = "Väärin, oikea vastaus on hirvi.";
    document.getElementById("answer3").innerHTML=texttoshow;}
if(document.getElementById("väärin9").checked){
    texttoshow = "Väärin, oikea vastaus on hirvi.";
    document.getElementById("answer3").innerHTML=texttoshow;}
}

function check4(){

//Käyttäjä voi vastata vain kerran

    document.getElementById("oikein4").disabled = true
    document.getElementById("väärin10").disabled = true
    document.getElementById("väärin11").disabled = true
    document.getElementById("väärin12").disabled = true

//oikeat vastaukset kerrotaan
if(document.getElementById("oikein4").checked){
    texttoshow = "Aivan oikein, kuvassa on Rantakäärme.";
    document.getElementById("answer4").innerHTML=texttoshow;
        score++;}

//Väärästä vastauksesta näytetään eri teksti 
if(document.getElementById("väärin10").checked){
    texttoshow = "Väärin, oikea vastaus on rantakäärme.";
    document.getElementById("answer4").innerHTML=texttoshow;}
if(document.getElementById("väärin11").checked){
    texttoshow = "Väärin, oikea vastaus on rantakäärme.";
    document.getElementById("answer4").innerHTML=texttoshow;}
if(document.getElementById("väärin12").checked){
    texttoshow = "Väärin, oikea vastaus on rantakäärme.";
    document.getElementById("answer4").innerHTML=texttoshow;}
}

function check5(){

//Käyttäjä voi vastata vain kerran

    document.getElementById("oikein5").disabled = true
    document.getElementById("väärin13").disabled = true
    document.getElementById("väärin14").disabled = true
    document.getElementById("väärin15").disabled = true

//oikeat vastaukset kerrotaan
if(document.getElementById("oikein5").checked){
    texttoshow = "Aivan oikein, kuvassa on västäräkki.";
    document.getElementById("answer5").innerHTML=texttoshow;
        score++;}

//Väärästä vastauksesta näytetään eri teksti 
if(document.getElementById("väärin13").checked){
    texttoshow = "Väärin, oikea vastaus on västäräkki.";
    document.getElementById("answer5").innerHTML=texttoshow;}
if(document.getElementById("väärin14").checked){
    texttoshow = "Väärin, oikea vastaus on västäräkki.";
    document.getElementById("answer5").innerHTML=texttoshow;}
if(document.getElementById("väärin15").checked){
    texttoshow = "Väärin, oikea vastaus on västäräkki.";
    document.getElementById("answer5").innerHTML=texttoshow;}
}
//Lopuksi näytetään paljonko käyttäjä sai pisteitä
function calculation(){
    texttoshow = ("Sait " + score + "/" + 5 + " kysymyksistä oikein!");
    document.getElementById("answer").innerHTML=texttoshow;
}