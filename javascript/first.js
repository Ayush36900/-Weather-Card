 /*let str ="Hello guys"
for(let i of str){
    console.log("i=",i)
}*/

/*let str="Javascript"
let size=0
for(let i of str){
    console.log("i=" ,i)
    size++;
}

console.log("Size= ",size)*/

/*let student = {
    name: "Rhaule",
    age: 20,
    cgpa: 9.89, 
    ispass: true
};

for(let key in student){
    console.log("key = ",key)
    console.log("key = ",key,"value = ",student[key])
}*/

/*for(let i=1;i<=100;i++){
   //even number
    if(i%2==0){
        console.log("num = ",i)
    }
    
}*/

/*let gamenum=3;
let usernae = prompt("Gusses the number: ");

while(usernae!= gamenum){
    newnmae = prompt("You are wroong gusses again")
}
console.log("COngractualtions you finaly done it")
*/
/*
let str1='collages'
let str2="new collages"
*/


/*console.log("Hello world");*/
/*It is reverse the string without useing the html
function Convert(str){
   const input=document.getElementById("inputes").value;
   let output=document.getElementById("output");
   return str.split(/\s+/).reverse().join('');
}*/

/*
//reverse the string with using the html
 function Convert(){
   const input=document.getElementById("inputes").value;
   let output=document.getElementById("output");
   const reversed=input.split(/\s+/).reverse().join(' ');

   output.textContent=reversed;
 }*/


   /*palindrome checker
   function Convert(){
    const input = document.getElementById("inputes").value;
    let output = document.getElementById("output");
    const reversed=input.split('').reverse().join('');//The split('') can convert the single word
    if(reversed===input){
        output.textContent=`The string ${reversed} is the paindrome`;
    }
    else{
        output.textContent=`The string ${reversed} is not the paindrome`;
    }
   
   }
    */

  /*
   //check even or odd
   function Convert(){
    const input=document.getElementById("inputes").value;
    let output=document.getElementById("output");
    if(input%2==0){
        output.textContent=`The ${input} is the even number`;
    }
     else if(input%1==0){
        output.textContent=`The ${input} is the odd number`;
    }
    else{
        output.textContent=`The ${input} is not a number`;

    }
   }
    */

   /*
   //find the factorial of a number
   function Convert(){
     const input=document.getElementById("inputes").value;
    let output=document.getElementById("output");
    let fact=1;
    for(let i=1;i<=input;i++){
        fact*=i;
    }  
    output.textContent=`The factorial of ${input} is: ${fact}`;
   }
    */

   //Reverse the number
   /*
   function Convert(){
    const input = document.getElementById("inputes").value;
    let output = document.getElementById("output");

    let reversed=input.trim().split('').reverse().join('');
    output.textContent=reversed;
   }
   */

   /*
   //Count the vowel
   function Convert(){
    const input = document.getElementById("inputes").value;
    let output = document.getElementById("output");

    let count=0;
    for(let i=0;i<input.length;i++){
        let ch=input[i];
        if(ch=='a'||ch==='e'|ch==='i'||ch==='o'||ch==='u'||ch==='A'||ch==='E'||ch==='I'||ch==='O'||ch==='U'){
        count++;
        }
    }
            output.textContent=`In the given string ${count} vowels are there`;
   }
    */

   /*
   //Sum of digits
   function Convert(){
    const input = document.getElementById("inputes").value;
    let output = document.getElementById("output");

    let sum=0;
    for(let i=0;i<input.length;i++){
        let n=input[i];
        if(n=>'0'&&n<='9'){

        sum+=parseInt(n);
        }
    }
        output.textContent=`The sum of digits is ${sum}`;
   }
        */
      

       const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "a5fb97eeb02fd88eb8d84fc117f1f621";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){

    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "";
        case (weatherId >= 300 && weatherId < 400):
            return "";
        case (weatherId >= 500 && weatherId < 600):
            return "";
        case (weatherId >= 600 && weatherId < 700):
            return "";
        case (weatherId >= 700 && weatherId < 800):
            return "";
        case (weatherId === 800):
            return "";
        case (weatherId >= 801 && weatherId < 810):
            return "";
        default:
            return "";
    }
}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
