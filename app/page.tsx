import styles from '../styles/Home.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="/brejariaducho.png" alt="Logo" className={styles.logo} />
      <div className={styles.icons}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:contato@meuprojeto.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  )
}
