//Grab HTML Elements
const dateHeading = document.getElementById("current-date");

const nameIn = document.getElementById("name");
const moodIn = document.getElementById("mood");
const polygonNum = document.getElementById("polygonNum");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const response1 = document.getElementById("response1");
const response2 = document.getElementById("response2");

//set variables
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const hoursFix = hours > 12? hours-12 : hours;
const minutes = date.getMinutes();
const ampm = hours >= 12? 'pm' : 'am';
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
const dayInWeek = dayNames[date.getDay()];
const number = Math.abs(number);
number = Math.floor(number);

//Date implpicit event handler
const formattedDate = `Today is ${hoursFix}:${minutes}${ampm} on ${dayInWeek}, ${day}, ${month}, ${year}`;
dateHeading.textContent = formattedDate;

//Name & Mood event handler
button1.addEventListener("click", () => {
    console.log("event button1 clicked");
    const name = nameIn.value;
    const mood = moodIn.value;
    if(name === '' && mood === ''){
        response1.textContent = "Please enter BOTH a name AND your mood";
    }else{
        //work on new line implementation
        response1.textContent = `The Masterfull Eagle's Music Company welcomes you ` + name +
        `! \r\n We recognize you are feeling ` + mood + `!`;
    }
})

//Fav number handler
button2.addEventListener("click", (number) => {
    if(number < 11 && number > 0){
        switch(number){
            case 1:
                number = "hena";
            case 2:
                number = "di";
            case 3:
                number = "tri";
            case 4:
                number = "tetra";
            case 5:
                number = "penta";
            case 6:
                number = "hexa";
            case 7:
                number = "hepta";
            case 8:
                number = "octa";
            case 9:
                number = "ennea";
            case 10:
                number = "deca";
            case 11: 
                number = "hendeca";
            default:
                break;
        }
        response2.textContent = number + "gon";
    }else{
        response2.textContent = "Wrong Data Entry Type: Please eneter a number from 1 - 10";
    }
})
/* Date Selector 
dateOptionsSelectElement.addEventListener("click", () => {

  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
    
  }
}); */
