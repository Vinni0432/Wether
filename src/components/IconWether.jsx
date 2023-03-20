import { ReactComponent as Sun } from "../Icon/sun.svg";
import { ReactComponent as CloudBolt } from "../Icon/cloud-bolt.svg";
import { ReactComponent as CloudSnowers } from "../Icon/cloud-showers-heavy.svg";
import { ReactComponent as CloudSun } from "../Icon/cloud-sun.svg";
import { ReactComponent as Cloud } from "../Icon/cloud.svg";
import { ReactComponent as SnowFlake } from "../Icon/snowflake.svg";
import { ReactComponent as Smog } from "../Icon/smog.svg";

const IconWether = ({ code, width }) => {
  let icon = null;
  switch (code) {
    case 0:
      icon = <Sun width={width} />;
      break;
    case 1:
    case 2:
    case 3:
      icon = <CloudSun width={width} />;
      break;
    case 45:
    case 48:
      icon = <Smog width={width} />;
      break;
    case 51:
    case 53:
    case 55:
      icon = <Cloud width={width} />;
      break;
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
      icon = <CloudSnowers width={width} />;
      break;
    case 66:
    case 67:
      icon = <CloudBolt width={width} />;
      break;
    case 71:
    case 73:
    case 75:
    case 77:
      icon = <SnowFlake width={width} />;
      break;
    case 80:
    case 81:
    case 82:
      icon = <CloudSnowers width={width} />;
      break;
    case 85:
    case 86:
      icon = <SnowFlake width={width} />;
      break;
    default:
      icon = <Sun width={width} />;
  }
  return <>{icon}</>;
};

export default IconWether;
