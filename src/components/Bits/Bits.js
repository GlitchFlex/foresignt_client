import { Tooltip } from "antd";
import { ReactNode } from "react";
import styles from "./Bits.module.css";


function Info({ icon, title, desc }) {
  return (
    
      <div className={styles.info}>
        <Tooltip title={desc}>
        {icon}
        </Tooltip>
        <p>
          <small>{title ? title : "NA"}</small>
          {/* <small>{desc}</small> */}
        </p>
      </div>
    
  );
}

export default Info;
