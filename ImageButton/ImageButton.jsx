//react

import LinkElement from "../LinkElement/LinkElement";

//styles
import styles from "./ImageButton.module.css";

export default function ImageButton({
  extraClass = undefined,
  imageSource = undefined,
}) {
  return imageSource.source === undefined ? (
    <p>Please provide button image</p>
  ) : (
    <div
      title={imageSource.title}
      className={`${styles["image-button-main"]}  ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      <LinkElement
        linkFor={imageSource.linkFor}
        ariaLabel={imageSource.title}
        text={<>&nbsp;</>}
        customStyle={{
          background: `url(${imageSource.source})`,
        }}
        toUrl={imageSource.link ?? "No url provided"}
        extraClass={[styles["image-button-main__link"]]}
      />
    </div>
  );
}
