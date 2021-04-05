var button=document.querySelector('.button')
var inputValue=document.querySelector('.inputValue')
var cityname=document.querySelector('.cityname')
var desc=document.querySelector('.desc')
var temp=document.querySelector('.temp')
var mintemp=document.querySelector('.mintemp')
var maxtemp=document.querySelector('.maxtemp')


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value +'&units=metric&appid=c2301dba66d093dde2ab4aa2447c5832')
.then(response =>response.json())
.then(data => 
    {
        console.log(data)
    var nameValue=data['cityname'];
    var tempValue= data['main']['temp'];
    var descValue=data['weather'][0]['description'];
    var mintempValue=data['main']['temp_min'];
    var maxtempValue=data['main']['temp_max'];

    cityname.innerHTML=nameValue;
    temp.innerHTML=tempValue;
    desc.innerHTML=descValue;
    maxtemp.innerHTML=mintempValue;
    mintemp.innerHTML=maxtempValue;        
})
.catch(err => alert("Wrong City Name"))
})