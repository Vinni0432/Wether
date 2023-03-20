import style from "./WetherDaily.module.css";

const WetherDaily = ({ wetherDate, arr }) => {
  return (
    <li className={style.wrapper}>
      <div className={style.wrapper__card}>{arr.map((item) => item)}</div>
    </li>
  );
};

export default WetherDaily;
