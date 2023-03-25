//react
import React from 'react';

//styles
import styles from './GoToTopButtonReference.module.css';

function GoToTopButtonReference({ extraClass = undefined }, ref) {
  // jsx template
  return (
    <div
      ref={ref}
      className={`${styles['go-to-top-button-reference-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      &nbsp;
    </div>
  );
}

export default React.forwardRef(GoToTopButtonReference);
