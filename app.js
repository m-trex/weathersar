const cityform = document.querySelector('form');
const card = document.querySelector('.card') ;
const details = document.querySelector('.details');
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const updateui = (data) =>{
    // const cityDets = data.cityDets ;
    // const weather = data.weather ; 
    const{cityDets , weather}= data;

    details.innerHTML= `
    
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;c</span>
    </div>
    ` ; 
    const iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src' ,iconsrc);
   
    const timesrc = weather.IsDayTime ? 'img/day.jpg' : 'img/night.jpg' ;
  
    time.setAttribute('src' ,timesrc) ;

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
        
    }

}


const updatecity = async(city) => {
    const cityDets = await getcity(city) ;
    const weather = await getwe(cityDets.Key);
    return {
      cityDets , weather 
    }


};
cityform.addEventListener('submit' , e => {
    e.preventDefault();
    const city = cityform.city.value.trim();
    cityform.reset();
    updatecity(city)
    .then(data => updateui(data))
    .catch(err => console.log(err));

});
