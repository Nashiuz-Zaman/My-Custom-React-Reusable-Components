//react
import { useRef } from 'react';

//components
import DownCaret from '../Symbols/DownCaret/DownCaret';
import PlainDescription from '../PlainDescription/PlainDescription';

//hook
import useCollapsibleElement from '../../hooks/useCollapsibleElement';

//styles
import styles from './HeadingWithCollapsedDescription.module.css';

//component starts here
export default function HeadingWithCollapsedDescription({
  heading = '',
  extraClass = undefined,
  description = '',
}) {
  const descriptionRef = useRef(null);
  const { open, toggle } = useCollapsibleElement(descriptionRef);

  // jsx template
  return (
    <div
      className={`${styles['heading-with-collapsed-description-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
      onClick={toggle}
    >
      <button
        className={`${styles['heading-with-collapsed-description-main__button']} flex-row-center-align flex-row-space-between-justify`}
      >
        <h3
          className={
            styles['heading-with-collapsed-description-main__button__heading']
          }
        >
          {heading}
        </h3>

        <DownCaret
          extraClass={[
            styles['heading-with-collapsed-description-main__button__icon'],
          ]}
          rotate={open ? true : false}
        />
      </button>

      {/* forwarding ref to the paragraph/description inside it to apply the collapsing styles from the custom hook */}
      <PlainDescription
        ref={descriptionRef}
        description={description}
        extraClass={[
          styles['heading-with-collapsed-description-main__description'],
        ]}
      />
    </div>
  );
}
