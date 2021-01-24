const key = 'kdREhOGX9GsrGGrpWO2AkNFXYarVQRIy' ;

const getwe = async(id)=> {
    const base ='https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base+query) ;
    const data = await response.json();
    return data[0];

};

const getcity = async(city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search' ;
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query );
    const data = await response.json();
    return data[0];
} ;

// getcity('cairo')
// .then (data => {
//     return getwe(data.Key);
// }).then(data => {console.log(data);})
// .catch(err =>console.log(err)
// );
