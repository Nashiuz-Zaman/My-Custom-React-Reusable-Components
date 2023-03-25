//react
import React from "react";

//styles
import styles from "./Textarea.module.css";

function Textarea(
  {
    label = true,
    labelText = "",
    placeholder = "no placeholder provided",
    value = undefined,
    name = "",
    onChange = null,
    onFocus = null,
    errorText = undefined,
    successText = undefined,
    extraClass = undefined,
  },
  ref
) {
  // jsx template
  return (
    <div
      className={`${styles["textarea-main-container"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      <label>
        {/* if there is a label text then render here */}
        {label && (
          <span className={styles["textarea-main-container__label"]}>
            {labelText}
          </span>
        )}

        {/*  textarea html element */}
        <textarea
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          ref={ref}
          onFocus={onFocus}
          className={styles["textarea-main-container__input"]}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          required
        />

        {/* if there is an error render this */}
        {errorText && (
          <p className={styles["textarea-main-container__error"]}>
            * {errorText}
          </p>
        )}

        {/* if there is a success message render this */}
        {successText && (
          <p className={styles["textarea-main-container__success"]}>
            {successText}
          </p>
        )}
      </label>
    </div>
  );
}

export default React.forwardRef(Textarea);
