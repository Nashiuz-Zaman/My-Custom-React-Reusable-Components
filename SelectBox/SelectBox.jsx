//styles
import styles from "./SelectBox.module.css";

export default function SelectBox({
  labelText = undefined,
  value = undefined,
  onChange = null,
  optionsArray = [],
  errorText = undefined,
  onFocus = null,
}) {
  return (
    <div className={styles["selectbox-main"]}>
      <label>
        {labelText && (
          <span className={styles["selectbox-main__label"]}>{labelText}</span>
        )}

        <select value={value} onChange={onChange} onFocus={onFocus}>
          {optionsArray.map((single) => {
            return <option key={single}>{single}</option>;
          })}
        </select>
        {errorText && (
          <p className={styles["selectbox-main__error"]}>{errorText}</p>
        )}
      </label>
    </div>
  );
}
