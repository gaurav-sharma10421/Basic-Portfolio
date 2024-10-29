let btn = document.querySelector('#btn');
let currmode = 'pink'; //default

//For Body
document.querySelector("body").style.backgroundColor = '#FBEAEB';
document.querySelector("body").style.color = '#2F3C7E';

//For footer
document.querySelector(".foot").style.backgroundColor = '#89ABE3'; //Blue
document.querySelector(".foot").style.color = '#00246B';

btn.addEventListener("click", () => {
    if (currmode == 'pink') {
        currmode = "blue";
        document.querySelector('body').style.backgroundColor = "#2F3C7E";//Blue  background
        document.querySelector('body').style.color = "#FBEAEB";//Patel Pink  text
        document.getElementById('btn').innerText = 'Pink Mode';

        //For Button
        document.querySelector('#btn').style.backgroundColor = "#FBEAEB";//pink  background
        document.querySelector('#btn').style.color = "#2F3C7E";//blue text
    }
    else {
        currmode = "pink";
        document.querySelector('body').style.backgroundColor = "#FBEAEB"; //Pastel Pink  //Background
        document.querySelector('body').style.color = "#2F3C7E";//Blue  text
        document.getElementById('btn').innerText = 'Blue Mode';

        //For Button
        document.querySelector('#btn').style.backgroundColor = "#2F3C7E";//Blue  background
        document.querySelector('#btn').style.color = "#FBEAEB";//Pink  text
    }
})