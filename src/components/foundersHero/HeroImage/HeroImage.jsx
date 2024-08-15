
import styles from './HeroImage.module.css'
import Image from 'next/image'


const HeroImage = () => {
    return (
        <Image
        src="/foundersImages/founder-mike-and-mandy.png"
        alt="mike and mandy"
        className={styles.heroImage}
        width = "500"
        height = "500"
      />
    )
}

export default HeroImage