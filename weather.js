let but=document.getElementById('flipbutton');
let name_city=document.getElementById('name');
let desc=document.getElementById('desc');
let temp=document.getElementById('temp');
let city=document.getElementById('CitySearch');

but.addEventListener("click",function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=55ac4b5e6e9271dcf0cb0536bf3415fb&units=metric')
.then(response=>response.json())
.then(data=>{
    var name_val=data['name'];
    var temp_val=data['main']['temp'];
    var desc_val=data['weather'][0]['description']

    name_city.innerHTML=name_val;
    temp.innerHTML=temp_val;
    desc.innerHTML=desc_val;
    city.value="";
})
.catch(err=>alert("Invalid City Name,Please Try Again!"))
})