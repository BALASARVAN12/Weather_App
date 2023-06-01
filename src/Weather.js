import React,{ useState } from 'react';

 function Weather() {
    const [city,setCity] = useState("");
    const [result,setResult] = useState("");
    const logout =()=>{
        localStorage.clear();
        window.location.reload()
    }
    const changeHandler = e =>{
      setCity(e.target.value);
    }
    
    const submitHandler = e =>{
      e.preventDefault();
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e78b4cffe6b26004fdfb9ddac1b941a`).then(
        response=> response.json()).then(
          data => {
            const kelvin = data.main.temp;
            const celcius = kelvin - 273.15;
            setResult(
              <div>
                Temperature at {city}
                <br/>
                {Math.round(celcius)}°C
              </div>
            );
            
            }
        ).catch(error => console.log(error))
        setCity("");
    }
  
    return (
      
      <>
        <button className='btn btn-danger' id="log_out" onClick={logout}>Logout</button>
<h6>Hello {localStorage.getItem('name')}</h6>
      <div className='WeatherApp'>
  <div class="card">
      <div class="card-body">
         <h1 className='card-title'>Enter Location</h1>
         <form onSubmit={submitHandler}>
                <input  type="text" name="city" onChange={changeHandler} value={city} placeholder='Enter Location'/> <br /><br />
                <input type="submit" value="Get Temperature" />
              </form><br /> 
      </div>
      <h1>{result}</h1>
  </div>
  </div>
      </>
      )
}
export default Weather;