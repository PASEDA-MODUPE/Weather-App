document.title ="My weather/Timer App"
const body = document.body
const temp = document.getElementById("temp")
const humidity = document.getElementById("humidity")
const town = document.getElementById("cityss")
const country = document.getElementById("country")
const btn = document.getElementById("btn")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")


const fetchdata =() => {

    const city = document.getElementById("city").value  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3776b1bd0b80836018bdb5893134999a&units=metric`;
     fetch(url)
     .then((response) => response.json())
     .then((data) => {
      
       const user = data;
    
       temp.textContent = user.main.temp + "°C"
       town.textContent = user.name;
       humidity.textContent = user.main.humidity+"g/m3"
       country.textContent = user.sys.country;
     });
     }
btn.addEventListener("click",fetchdata);


function getTime(){
let newdate = new Date
    hours.textContent = newdate.getHours()
    minutes.textContent = newdate.getMinutes()
    seconds.textContent = newdate.getSeconds()
}
setInterval(getTime,1)

