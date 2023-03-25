//react
import { useRef } from 'react';

//components
import SectionTitle from '../../SectionTitle/SectionTitle';
import SelectBox from '../../SelectBox/SelectBox';
import CollectionOfArticles from '../../CollectionOfArticles/CollectionOfArticles';
import FilterResults from '../../FilterResults/FilterResults';
import Button from '../../Button/Button';

//hook
import useCollapsibleElement from '../../../hooks/useCollapsibleElement';
import useProductDataContext from '../../../hooks/useProjectDataContext';

//styles
import styles from './ProjectsSection.module.css';

export default function ProjectsSection({
  id = 'no-id-provided',
  title = undefined,
  projectDataArray = undefined,
  filterOptions = [],
  filterLabelText = 'no text provided',
  selectState = '',
  handleChange = null,
  extraClass = undefined,
}) {
  //create filter container ref
  const filterContainerRef = useRef(null);
  const { setSelectState } = useProductDataContext();
  const { open: filterOpen, toggle: toggleFilter } = useCollapsibleElement(
    filterContainerRef,
    '2.5rem'
  );

  // jsx template
  return (
    <section
      id={id}
      className={`${styles['section-project']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {title && (
        <SectionTitle
          extraClass={[styles['section-project__section-title']]}
          title={title}
        />
      )}

      <Button
        onClick={() => {
          toggleFilter();
          setSelectState('All');
        }}
        buttonText={filterOpen ? 'Close Filter' : 'Browse Category'}
      />

      {/* just a container div to make the collapse effect work without removing the padding of the filter component */}
      <div className={styles['filter-collapse']} ref={filterContainerRef}>
        {/* filter component */}
        <FilterResults
          functionalElement={
            <SelectBox
              value={selectState}
              labelText={filterLabelText}
              optionsArray={filterOptions}
              onChange={handleChange}
            />
          }
          extraClass={[styles['section-project__filter-projects']]}
        />
      </div>

      {/* collection or gallery component */}
      <CollectionOfArticles
        extraClass={[styles['section-project__collection-of-projects']]}
        articleDataArray={projectDataArray}
      />
    </section>
  );
}
