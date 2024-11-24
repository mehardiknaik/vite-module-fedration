import { useEffect, useRef, useState } from "react";
import style from "./SnowFall.module.css";
import Snow from "react-snowfall";

const SnowFall = () => {
  const [color, setColor] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (divRef.current) {
      const computedStyle = getComputedStyle(divRef.current);
      const cssColor = computedStyle.getPropertyValue("--bg-color").trim();
      setColor(cssColor||'#fff');
    }
  }, []);
  return (
    <div ref={divRef} className={style.snow}>
      <Snow color={color} />
    </div>
  );
};

export default SnowFall;
