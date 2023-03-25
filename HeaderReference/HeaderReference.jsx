//react
import React from 'react';

//styles
import styles from './HeaderReference.module.css';

function HeaderReference({ extraClass = undefined }, ref) {
  // jsx template
  return (
    <div
      ref={ref}
      className={`${styles['header-reference-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    ></div>
  );
}

export default React.forwardRef(HeaderReference);
