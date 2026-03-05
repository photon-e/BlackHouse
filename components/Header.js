export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="BlackHouse Records home">
        <span className="brand-mark">BH</span>
        <span>
          <strong>BlackHouse Records</strong>
          <small>Yelwa, Bauchi · Nigeria</small>
        </span>
      </a>
      <nav>
        <a href="#artists">Artists</a>
        <a href="#platforms">Music</a>
        <a href="#merch">Merch</a>
        <a href="#instruments">Instruments</a>
        <a href="#shows">Shows</a>
      </nav>
    </header>
  )
}
