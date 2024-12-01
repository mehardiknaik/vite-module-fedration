import SnowFall from "../SnowFall";
import style from "./Event.module.css";
import { Link } from "react-router";
import winterBg from "../../assets/winterBg.png";
import { createPortal } from "react-dom";

const Event = () => {
  const src = import.meta.env.DEV
    ? `${import.meta.env.VITE_BASE_URL}${winterBg}`
    : winterBg;
  return (
    <div data-label="remote-container">
      <SnowFall />
      <Link className={style.event} to="/remote">
        <img className={style.bg} src={src} alt="winterBg" />
      </Link>
    </div>
  );
};

const EventWrapper = () =>createPortal(<Event />, document.body);

export default EventWrapper;
