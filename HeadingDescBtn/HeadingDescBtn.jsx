import React from "react";
import styles from "./HeadingDescBtn.module.css";

export default function HeadingDescBtn({
  heading = "",
  subheading = "",
  shortIntroduction = "",
  extraClass = undefined,
  button = undefined,
  buttonInfoArray = [],
  group = false,
  list = false,
  description = false,
}) {
  return (
    <div
      className={`${styles["heading-desc-btn-textbox"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      {shortIntroduction && (
        <p className={styles["heading-desc-btn-textbox__short-introduction"]}>
          {shortIntroduction}
        </p>
      )}
      {heading && (
        <h2 className={styles["heading-desc-btn-textbox__heading"]}>
          {heading}
        </h2>
      )}
      {subheading && (
        <p className={styles["heading-desc-btn-textbox__subheading"]}>
          {subheading}
        </p>
      )}

      {description !== false && (
        <p className={styles["heading-desc-btn-textbox__description"]}>
          {description}
        </p>
      )}

      {list !== false && (
        <ul className={styles["heading-desc-btn-textbox__list-of-text"]}>
          {list.map((single, i) => {
            return (
              <li
                key={i}
                className={
                  styles["heading-desc-btn-textbox__list-of-text__item"]
                }
              >
                <span className="highlighted-secondary bold">-</span> {single}
              </li>
            );
          })}
        </ul>
      )}

      {button && !group && button}

      {button && group && (
        <div className={styles["button-group"]}>
          {buttonInfoArray.map((single) => {
            return React.cloneElement(button, {
              key: single.id,
              toUrl: single.link,
              linkFor: single.linkFor,
              buttonText: `${
                single.buttonText === ""
                  ? "Please provide text for button"
                  : single.buttonText
              }`,
            });
          })}
        </div>
      )}
    </div>
  );
}
