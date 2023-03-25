//react
import React from 'react';

//styles
import styles from './FilterResults.module.css';

function FilterResults(
  {
    extraClass = undefined,
    functionalElement = 'no functional element provided',
  },
  ref
) {
  return (
    <form
      ref={ref}
      className={`${styles['filter-results-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {/* this can be anything, select, input etc - this is dynamic, so that filter component can be used anywhere */}
      {functionalElement}
    </form>
  );
}

export default React.forwardRef(FilterResults);
