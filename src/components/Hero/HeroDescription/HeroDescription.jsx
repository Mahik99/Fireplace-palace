import Link from "next/link";
import styles from "./HeroDescription.module.css";

const HeroDescription = () => {
  return (
    <div className={styles.heroDescription}>
      <p className={styles.heroHeadline}>
        Discover the <br />
        perfect fireplace ...
      </p>
      <p className={styles.consultationParagraph}>
        <Link href="/design">Request a design consultation</Link>
      </p>
    </div>
  );
};

export default HeroDescription;
