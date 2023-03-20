const WetherItem = ({ key, wetherDate, arr }) => {
  return (
    <div>
      <li key={key}>
        <div>{arr.map((item) => item)}</div>
      </li>
    </div>
  );
};

export default WetherItem;
