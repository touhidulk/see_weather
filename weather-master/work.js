window.addEventListener('load',() =>{
    let lon;
    let lat;
    let Location =document.querySelector('.location');
    let temp = document.querySelector('.temp');
    let summry= document.querySelector('.summry');
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position =>{
           console.log(position);
           lon=position.coords.longitude; 
           lat=position.coords.latitude;
        const web="https://cors-anywhere.herokuapp.com/";
           const api =`${web}https://api.darksky.net/forecast/456cd66d89d76fefc109a942d9afced8/${lat},${lon}`;
       fetch(api)
          .then(response =>{
              return response.json();
          })
          .then(data =>{
              console.log(data);
              const{temperature,summary}= data.currently;
              temp.textContent=Math.round(toDegre(temperature));
              Location.textContent=data.timezone;
              summry.textContent=summary;
                
          })
         
       });
       

    }
    else{
        h1.textContent="sorry"; 
    }
});
function toDegre(temp){
    return((temp-32)/1.8);
}