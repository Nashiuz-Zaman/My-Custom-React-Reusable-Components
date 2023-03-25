//react
import React from "react";

//styles
import styles from "./HeadingDescriptionGroup.module.css";

//component starts here
export default function HeadingDescriptionGroup({
  extraClass = undefined,
  headingDescriptionDataArray = undefined,
  element = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles["heading-description-group-main"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      {/* this is dynamic, so that any component that has the same props and same structure can be passed into this map method */}
      {element &&
        headingDescriptionDataArray.map((single) => {
          return React.cloneElement(element, {
            key: single.id,
            heading: single.title,
            description: single.description,
          });
        })}
    </div>
  );
}
