import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const artists = [
  {
    name: 'blaco sam',
    role: 'Lead Rap Vocalist',
    bio: 'Punchline-heavy verses, real-life storytelling, and raw Northern cadence inspired by daily life in Yelwa, Bauchi.',
  },
  {
    name: 'GiG da plug',
    role: 'Melodic Rap & Hooks',
    bio: 'Creates catchy hooks, bold energy, and crossover vibes that blend Hausa street sound with modern global rap production.',
  },
]

const platforms = [
  { name: 'Spotify', className: 'platform spotify', href: '#' },
  { name: 'Apple Music', className: 'platform apple', href: '#' },
  { name: 'YouTube Music', className: 'platform', href: '#' },
  { name: 'Audiomack', className: 'platform', href: '#' },
  { name: 'Boomplay', className: 'platform', href: '#' },
  { name: 'Deezer', className: 'platform', href: '#' },
]

const merch = ['Graphic Tees', 'Hoodies & Tracksuits', 'Caps & Beanies', 'Chains & Bracelets', 'Sneakers', 'Bags & Backpacks']

const instruments = ['Drums', 'Violin', 'Saxophone']

export default function Home() {
  return (
    <div className="container" id="home">
      <div className="bg-animation" aria-hidden="true">
        <span className="glow orb-one" />
        <span className="glow orb-two" />
        <span className="glow orb-three" />
      </div>

      <Head>
        <title>BlackHouse Records | Yelwa, Bauchi</title>
        <meta
          name="description"
          content="BlackHouse Records is a rap duo and label from Yelwa, Bauchi, Nigeria creating modern hip-hop, merch, and live instruments."
        />
      </Head>

      <Header />

      <main>
        <section className="hero">
          <p className="eyebrow">Independent Label · Hip-Hop Duo</p>
          <h1>The New Voice of Yelwa, Bauchi.</h1>
          <p className="description">
            From hard rap to full lifestyle drops, BlackHouse delivers music, fashion, and stage-ready energy for fans head-to-toe.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#platforms">
              Stream now
            </a>
            <a className="btn ghost" href="#merch">
              Shop merch
            </a>
          </div>
        </section>

        <section id="artists" className="section">
          <h2>Meet the Artists</h2>
          <div className="grid two-col">
            {artists.map((artist) => (
              <article className="card" key={artist.name}>
                <div className="artist-placeholder">Artist Image</div>
                <h3>{artist.name}</h3>
                <p className="tag">{artist.role}</p>
                <p>{artist.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="platforms" className="section">
          <h2>Listen on All Major Platforms</h2>
          <p className="description">Spotify and Apple Music are featured first. Also available on other top streaming services.</p>
          <div className="platform-grid">
            {platforms.map((platform) => (
              <a key={platform.name} className={platform.className} href={platform.href}>
                {platform.name}
              </a>
            ))}
          </div>
        </section>

        <section id="merch" className="section">
          <h2>Official Merch — Head to Toe</h2>
          <div className="grid three-col">
            {merch.map((item) => (
              <article key={item} className="card">
                <p className="tag">Merch</p>
                <h3>{item}</h3>
                <p>Premium BlackHouse streetwear and accessories for every fit.</p>
              </article>
            ))}
          </div>
        </section>

        <section id="instruments" className="section">
          <h2>Live Sound Instruments</h2>
          <div className="instrument-list">
            {instruments.map((item) => (
              <article key={item} className="show-item">
                <strong>{item}</strong>
                <span>Integrated in recordings and live sessions</span>
              </article>
            ))}
          </div>
        </section>

        <section id="shows" className="section contact">
          <h2>Bookings & Partnerships</h2>
          <p>For performances, media, and collaborations: blackhouserecords@gmail.com · +234 800 000 0000</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
