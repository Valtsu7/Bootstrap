// Tekijä Otto-Ville Juntunen

// määritetään pisteet
var score = 0;
// tehdään funktio vastauksille
function tarkistaVastaus1(){

    // pidetään huoli, että käyttäjä ei vaihda vastaustaan
    document.getElementById("oikein1").disabled = true
    document.getElementById("väärin1").disabled = true
    document.getElementById("väärin2").disabled = true
    document.getElementById("väärin3").disabled = true

    // jos käyttäjä vastaa oikein, kerrtoaan se käyttäjälle ja lisätään pisteet
    if(document.getElementById('oikein1').checked){
        texttoshow = "Oikein Helsinki on Suomen pääkaupunki!";
        document.getElementById("O1").innerHTML=texttoshow;
            score++;}
    // jos käyttäjä vastaa väärin, kerrtoaan se käyttäjälle
    if(document.getElementById("väärin1").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut A. Helsinki!";
        document.getElementById("V1").innerHTML=texttoshow;}

    if(document.getElementById("väärin2").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut A. Helsinki!";
        document.getElementById("V1").innerHTML=texttoshow;}

    if(document.getElementById("väärin3").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut A. Helsinki!";
        document.getElementById("V1").innerHTML=texttoshow;}

};

// Toistetaan sama funktio jokaisen kysymyksen kohdalla. Vaihdetaan vain id:t ja näytettävät tekstit vastaamaan kutakin kysymystä
function tarkistaVastaus2(){

    document.getElementById("oikein2").disabled = true
    document.getElementById("väärin4").disabled = true
    document.getElementById("väärin5").disabled = true
    document.getElementById("väärin6").disabled = true

    if(document.getElementById('oikein2').checked){
        texttoshow = "Oikein! Koillinen ei ole yksi pääilmansuunnista. Pääilmansuuntia ovat Pohjoinen, Etelä, Itä ja Länsi";
        document.getElementById("O2").innerHTML=texttoshow;
            score++;}
        

    if(document.getElementById("väärin4").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut Koillinen!";
        document.getElementById("V2").innerHTML=texttoshow;}

    if(document.getElementById("väärin5").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut Koillinen!";
        document.getElementById("V2").innerHTML=texttoshow;}

    if(document.getElementById("väärin6").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut Koillinen!";
        document.getElementById("V2").innerHTML=texttoshow;}

}
//toistetaan...
function tarkistaVastaus3(){

    document.getElementById("oikein3").disabled = true
    document.getElementById("väärin7").disabled = true
    document.getElementById("väärin8").disabled = true
    document.getElementById("väärin9").disabled = true

    if(document.getElementById('oikein3').checked){
        texttoshow = "Oikein! Ranska! ei ole yksi pohjoismaista!";
        document.getElementById("O3").innerHTML=texttoshow;
            score++;}


    if(document.getElementById("väärin7").checked){
        texttoshow = "Väärin! Oikea vastaus on B. Ranska! ";
        document.getElementById("V3").innerHTML=texttoshow;}

    if(document.getElementById("väärin8").checked){
        texttoshow = "Väärin! Oikea vastaus on B. Ranska!";
        document.getElementById("V3").innerHTML=texttoshow;}

    if(document.getElementById("väärin9").checked){
        texttoshow = "Väärin! Oikea vastaus on B. Ranska!";
        document.getElementById("V3").innerHTML=texttoshow;}

}
//toistetaan...
function tarkistaVastaus4(){

    document.getElementById("oikein4").disabled = true
    document.getElementById("väärin10").disabled = true
    document.getElementById("väärin11").disabled = true
    document.getElementById("väärin12").disabled = true

    if(document.getElementById('oikein4').checked){
        texttoshow = "Oikein! Eurooppa on maanosa!";
        document.getElementById("O4").innerHTML=texttoshow;
            score++;}

    if(document.getElementById("väärin10").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut A. Eurooppa!";
        document.getElementById("V4").innerHTML=texttoshow;}

    if(document.getElementById("väärin11").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut A. Eurooppa!";
        document.getElementById("V4").innerHTML=texttoshow;}

    if(document.getElementById("väärin12").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut A. Eurooppa!";
        document.getElementById("V4").innerHTML=texttoshow;}

}
//toistetaan...
function tarkistaVastaus5(){

    document.getElementById("oikein5").disabled = true
    document.getElementById("väärin13").disabled = true
    document.getElementById("väärin14").disabled = true
    document.getElementById("väärin15").disabled = true

    if(document.getElementById('oikein5').checked){
        texttoshow = "Oikein! Tyynimeri on valtameri!";
        document.getElementById("O5").innerHTML=texttoshow;
            score++;}

    if(document.getElementById("väärin13").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut D. Tyynimeri!";
        document.getElementById("V5").innerHTML=texttoshow;}

    if(document.getElementById("väärin14").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut D. Tyynimeri!";
        document.getElementById("V5").innerHTML=texttoshow;}

    if(document.getElementById("väärin15").checked){
        texttoshow = "Väärin! Oikea vastaus olisi ollut D. Tyynimeri!";
        document.getElementById("V5").innerHTML=texttoshow;}

}
// kerrotaan käyttäjälle hänen saamansa pisteet
function pisteidenLaskenta(){
    texttoshow = ("Sait " + score + "/" + 5 + " kysymyksistä oikein!");
    document.getElementById("tulos").innerHTML=texttoshow;
}




