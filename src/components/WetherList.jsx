import WetherItem from "./WetherItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import WetherNow from "./WetherNow";
import TimeWether from "./TimeWether";
import WetherDaily from "./WetherDaily";
import IconWether from "./IconWether";
import DayOfWeek from "./DayOfWeek";

import style from "./WetherList.module.css";

const WetherList = () => {
  const wetherDate = useSelector((state) => state.data.data);

  const [arr, setArr] = useState([]);
  const [dailyCard, setDailyCard] = useState([]);

  let horlyArr = [];
  let dailyArr = [];

  useEffect(() => {
    for (let i = 0; i < wetherDate.hourly.time.length; i++) {
      // horly wether
      horlyArr.push(
        <div key={Math.random()} className={style.wrapper_horly}>
          <div className={style.wrapper__horly_title}>
            <div>
              <DayOfWeek unix_timestamp={wetherDate.hourly.time[i]} />
            </div>
            <div className={style.line}></div>
            <div>
              <TimeWether unix_timestamp={wetherDate.hourly.time[i]} />
            </div>
          </div>
          <div className={style.wrapper__horly_item}>
            <IconWether code={wetherDate.hourly.weathercode[i]} width={40} />
          </div>
          <div className={style.wrapper__horly_item}>
            <div>Temp</div>
            <div>
              {" "}
              {wetherDate.hourly.temperature_2m[i]}
              {wetherDate.hourly_units.temperature_2m}
            </div>
          </div>
          <div className={style.wrapper__horly_item}>
            <div>AppTemp</div>
            <div>
              {" "}
              {wetherDate.hourly.apparent_temperature[i]}
              {wetherDate.hourly_units.apparent_temperature}
            </div>
          </div>
          <div className={style.wrapper__horly_item}>
            <div>Wind</div>
            <div>
              {" "}
              {wetherDate.hourly.windspeed_10m[i]}
              {wetherDate.hourly_units.windspeed_10m}
            </div>
          </div>
          <div className={style.wrapper__horly_item}>
            <div>Precip</div>
            <div className={style.wrapper__horly_item}>
              {" "}
              {wetherDate.hourly.precipitation[i]}
              {wetherDate.hourly_units.precipitation}
            </div>
          </div>
        </div>
      );
    }
    // week wether
    for (let i = 0; i < wetherDate.daily.time.length; i++) {
      dailyArr.push(
        <div key={Math.random()} className={style.wrapper__weeek}>
          <div className={style.wrapper__weeek_icon}>
            <IconWether code={wetherDate.daily.weathercode[i]} width={50} />
          </div>
          <div>
            <h3>
              <DayOfWeek unix_timestamp={wetherDate.daily.time[i]} />
            </h3>
          </div>
          <div>
            <h5>Day {wetherDate.daily.temperature_2m_max[i]}°</h5>
            <h5>Night {wetherDate.daily.temperature_2m_min[i]}°</h5>
          </div>
        </div>
      );
    }
    setArr(horlyArr);
    setDailyCard(dailyArr);

    console.log("UseEffect", horlyArr);
  }, []);
  return (
    <>
      <WetherNow wetherDate={wetherDate} />
      <ul>
        <WetherDaily wetherDate={wetherDate} arr={dailyCard} />
      </ul>
      <ul>
        <WetherItem key={Math.random()} wetherDate={wetherDate} arr={arr} />
      </ul>
    </>
  );
};

export default WetherList;
