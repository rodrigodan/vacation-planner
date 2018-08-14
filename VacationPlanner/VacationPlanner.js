var name = window.prompt("Welcome to the vacation planner. Please enter your name");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;
var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;

function calculateDays(){
    var days = document.getElementById("days");
    var daysMessage = document.getElementById("daysMessage");
    
    if(days.value < 4){
        daysMessage.innerHTML = "Short trips are always worth it!";

    }
    else if (days.value < 7){
        daysMessage.innerHTML = "Cool, you’ll be there for almost a week!";
    }
    else{
        daysMessage.innerHTML = "You’ll have plenty of time to relax and have fun!";
    }
    var aux = 
    document.getElementById("hoursMessage").innerHTML = "That means you'll be traveling for " + 24*days.value + " hours";
    document.getElementById("minutesMessage").innerHTML = "That means you'll be traveling for " + 60*24*days.value + " minutes";
    document.getElementById("secondsMessage").innerHTML = "Witch means you'll be traveling for " + 60*60*24*days.value + " seconds";
    var timingNext = document.getElementById("timingNext");
    timingNext.removeAttribute("hidden");
}

timingNext.onclick = function(){
    document.getElementById("budgetSection").removeAttribute("hidden");
    
}

enterBudget.onclick = function(){
    var tripBudget = document.getElementById("tripBudget");
    var tripExchangeMsg = document.getElementById("tripExchangeMsg");
    var dailyExchangeMsg = document.getElementById("dailyExchangeMsg");
    var exchange10Msg = document.getElementById("exchange10Msg");
    var exchange500Msg = document.getElementById("exchange500Msg");
    tripExchangeMsg.innerHTML = "This means that you'll need R$ " + tripBudget.value*3.50;
    dailyExchangeMsg.innerHTML = "That means you can spend R$" + (tripBudget.value*3.50/days.value).toFixed(2) + " per day";
    exchange10Msg.innerHTML= "You'll need R$ " + tripBudget.value*3.50*10 + " for an item that would cost you 10 USD";
    exchange500Msg.innerHTML = "You'll need R$ " + tripBudget.value*3.50*500 + " for an item that would cost you 500 USD";
    var budgetNext = document.getElementById("budgetNext");
    budgetNext.removeAttribute("hidden");
}

// slide based on images:
var images = ["images/amazon.jpg", "images/hotel.jpg", "images/restaurant.jpg", "images/tiger.jpg" ];
var currentImage = 0;
setInterval(changeImage, 3000);
function changeImage(){
    currentImage += 1;
    currentImage %= images.length;
    document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
}