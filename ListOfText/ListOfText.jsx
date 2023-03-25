//styles
import styles from './ListOfText.module.css';

export default function ListOfText({
  list = undefined,
  extraClass = undefined,
  ordered = false,
}) {
  // if ordere is true render the list with ol html tag otherwise render with ul tag
  const ListTag = ordered ? 'ol' : 'ul';

  // jsx template
  return (
    <div
      className={`${styles['list-of-text-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {/* use the ListTag variable here as the JSX tag */}
      <ListTag className={styles['list-of-text-main__list']}>
        {list.map(single => {
          return (
            <li
              key={single}
              className={styles['list-of-text-main__list__list-item']}
            >
              {single}
            </li>
          );
        })}
      </ListTag>
    </div>
  );
}
