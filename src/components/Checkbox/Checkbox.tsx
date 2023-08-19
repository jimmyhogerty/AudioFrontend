import React, { useContext, useEffect, useState } from "react";
import styles from "./Checkbox.module.css";
import { UserContext } from "../../App";

interface CheckboxProps
  extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "checked"> {
  label: string;
  checked?: boolean;
}

const Checkbox = ({ label, checked: allChecked }: CheckboxProps) => {
  const [checked, setChecked] = useState(allChecked || false);
  const { sites, setSites } = useContext(UserContext);

  useEffect(() => {
    if (allChecked === undefined) return;
    setChecked(allChecked);
  }, [allChecked]);

  return (
    <div className={styles.CheckboxWrapper}>
      <label className={styles.Label}>
        <input
          type="checkbox"
          checked={allChecked || checked}
          onChange={() => {
            console.log(sites);
            setChecked(!checked);
            if (!checked === false) {
              setSites(sites.filter((site) => site !== label));
            } else {
              setSites([...sites, label]);
            }
          }}
        />
        {checked && <p className={styles.Checkmark}>✔️</p>}
        <span className={styles.LabelText}>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
