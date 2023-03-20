import IconWether from "./IconWether";
import TimeWether from "./TimeWether";
import style from "./wetherNow.module.css";

const WetherNow = ({ wetherDate }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_now}>
        <IconWether code={wetherDate.current_weather.weathercode} width={50} />
        <h2>
          Now {wetherDate.current_weather.temperature}
          {wetherDate.hourly_units.temperature_2m}
        </h2>
      </div>
      <div className={style.wrapper_now_text}>
        <div className={style.card}>
          <h3>Time</h3>
          <h3>
            <TimeWether unix_timestamp={wetherDate.current_weather.time} />
          </h3>
        </div>
        <div className={style.card}>
          <h3>Wind speed</h3>
          <h3>
            {wetherDate.current_weather.windspeed}{" "}
            {wetherDate.hourly_units.windspeed_10m}
          </h3>
        </div>
        <div className={style.card}>
          <h3>Wind direction</h3>
          <h3>{wetherDate.current_weather.winddirection}°</h3>
        </div>
      </div>
    </div>
  );
};

export default WetherNow;
