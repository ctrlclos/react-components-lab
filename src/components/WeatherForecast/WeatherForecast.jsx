import './WeatherForecast.css'
import WeatherIcon from '/src/components/WatherIcon/WeatherIcon.jsx'
import WeatherData from '/src/components/WeatherData/WeatherData.jsx'

const WeatherForecast = ({day, img, imgAlt, conditions, time}) => {
 return (<div className="weather">
  <h2>{day}</h2>
  <WeatherIcon img={img} imgAlt={imgAlt}/>
  <WeatherData conditions={conditions} time={time}/>
</div>)
}
export default WeatherForecast;
