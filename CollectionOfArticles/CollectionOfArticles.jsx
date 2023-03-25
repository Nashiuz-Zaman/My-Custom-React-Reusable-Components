//components
import Article from '../Article/Article';
import LinkButton from '../LinkButton/LinkButton';

//styles
import styles from './CollectionOfArticles.module.css';

export default function CollectionOfArticles({
  articleDataArray = undefined,
  extraClass = undefined,
}) {
  return (
    <div
      className={`${styles['collection-of-articles-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {!articleDataArray
        ? 'No data provided'
        : articleDataArray.map((singleProject) => {
            return (
              <Article
                extraClass={[styles['collection-of-articles-main__article']]}
                key={singleProject.id}
                name={singleProject.title}
                imageSource={singleProject.imageSource}
                functionalElements={singleProject.linkDataArray.map(
                  (singleButton) => {
                    return (
                      <LinkButton
                        key={singleButton.buttonText}
                        linkFor={singleButton.linkFor}
                        toUrl={singleButton.toUrl}
                        buttonText={singleButton.buttonText}
                        iconImageSource={
                          singleButton.imageSource && singleButton.imageSource
                        }
                      />
                    );
                  }
                )}
              />
            );
          })}
    </div>
  );
}
