import styles from './Article.module.css';
import Image from 'next/image';

const Article = ({ imageSrc, altText, title, description }) => {
  return (
    <article className={styles.tile}>
      <Image src={imageSrc} alt={altText} className={styles.tileImage} width = "250" height="250" />
      <h3>{title}</h3>
      <p className='articleP'>{description}</p>
    </article>
  );
};

export default Article;
