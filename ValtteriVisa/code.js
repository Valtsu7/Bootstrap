
// Tekijä: Valtteri Koivistoinen


// Pisteiden määritys
var score = 0;


// 1.tehtävä


// Käyttäjä laittaa vastauksensa vastauskenttään, ja napista painettuaan tietää menikö oikein vain väärin (muut funktiot samanlaisia)

document.getElementById("button1").onclick = function(){


    // käyttäjä ei voi vastata uudelleen
    document.getElementById("input1").disabled = true
    
    let answer = Number(document.getElementById("input1").value);
 
    
    const answer1 = "Vastauksesi on täysin oikein! ";
    const answer2 = "Vastauksesi on väärin. Oikea vastaus on 35.";


    if(answer < 35){
        document.getElementById("right").innerText = answer2;

         }

     if(answer > 35){
    document.getElementById("right").innerText = answer2;


    }

    if(answer === 35){
        document.getElementById("right").innerText = answer1; score++;}


}

// 2.Tehtävä

document.getElementById("button2").onclick = function(){

    document.getElementById("input2").disabled = true

    let num = Number(document.getElementById("input2").value);
 
    
    const answer1 = "Vastauksesi on täysin oikein!";
    const answer3 = "Vastauksesi on väärin. Oikea vastaus on 5.";


    if(num < 5){
        document.getElementById("right2").innerText = answer3;

         }

     if(num > 5){
    document.getElementById("right2").innerText = answer3;


    }

    if(num === 5){
        document.getElementById("right2").innerText = answer1; score++;}


}

// 3.Tehtävä
document.getElementById("button3").onclick = function(){

    document.getElementById("input3").disabled = true

    let num1 = Number(document.getElementById("input3").value);
 
    
    const answer1 = "Vastauksesi on täysin oikein!";
    const answer4 = "Vastauksesi on väärin. Oikea vastaus on 33.";


    if(num1 < 33){
        document.getElementById("right3").innerText = answer4;

         }

     if(num1 > 33){
    document.getElementById("right3").innerText = answer4;


    }

    if(num1 === 33){
        document.getElementById("right3").innerText = answer1; score++;}


}


// 4.Tehtävä

document.getElementById("button4").onclick = function(){

    document.getElementById("input4").disabled = true

    let num2 = Number(document.getElementById("input4").value);
 
    
    const answer1 = "Vastauksesi on täysin oikein!";
    const answer5 = "Vastauksesi on väärin. Oikea vastaus on 8.";


    if(num2 < 8){
        document.getElementById("right4").innerText = answer5;

         }

     if(num2 > 8){
    document.getElementById("right4").innerText = answer5;


    }

    if(num2 === 8){
        document.getElementById("right4").innerText = answer1; score++;}


}

// 5.Tehtävä
document.getElementById("button5").onclick = function(){
   
    document.getElementById("input5").disabled = true

    let num3 = Number(document.getElementById("input5").value);
 
    
    const answer1 = "Vastauksesi on täysin oikein!";
    const answer6 = "Vastauksesi on väärin. Oikea vastaus on 60.";


    if(num3 < 60){
        document.getElementById("right5").innerText = answer6;

         }

     if(num3 > 60){
    document.getElementById("right5").innerText = answer6;


    }

    if(num3 === 60){
        document.getElementById("right5").innerText = answer1; score++;}


}

// Kokonaispisteet

// Nappia painettuaan käyttäjä saa tietää kuinka monta tehtävää meni oikein
document.getElementById("button6").onclick = function(){
  
    const answer7 = ("Sait " + score + "/" + 5 + " vastausta oikein!");
    document.getElementById("vastaus").innerText = answer7;
}