import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>© {year} BlackHouse Records · Built for the Yelwa sound.</p>
      <div className={styles.links}>
        <a href="#">Spotify</a>
        <a href="#">Apple Music</a>
        <a href="#">YouTube Music</a>
        <a href="#">Audiomack</a>
        <a href="#">Boomplay</a>
      </div>
    </footer>
  )
}
