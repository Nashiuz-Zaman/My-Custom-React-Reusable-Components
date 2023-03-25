//image source
import hamburgerIcon from "./image/hamburger.svg";

//styles
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu({
  onClick = undefined,
  extraClass = undefined,
  alternativeTheme = false,
}) {
  return (
    <div
      onClick={onClick}
      className={`${styles["hamburger-menu-main"]}  ${
        alternativeTheme
          ? styles["hamburger-menu-main--alternative"]
          : "no-alternative-state"
      } ${extraClass ? extraClass.join(" ") : "no-extra-class"}`}
    >
      <button
        aria-label="Mobile Navigation Button to toggle navigation menu on and off"
        className={styles["hamburger-menu-main__button"]}
        style={{
          background: `url(${hamburgerIcon})`,
        }}
      >
        &nbsp;
      </button>
    </div>
  );
}
