import Head from "next/head";
import Link from "next/link";

import AppStoreBadge from "../components/app-store-badge";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>lily dex</title>
        <link rel="icon" href="/lily-dex-icon.png" />
        <meta
          name="description"
          content="Track the Pokemon you've captured in Pokemon GO. lily dex is a dead-simple app for Pokedex completionists."
        />
      </Head>

      <div className={styles.section + " " + styles.hero}>
        <svg
          className={styles.divider}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="white" points="0,100 100,0 100,100" />
        </svg>

        <div className={styles.sectionContainer}>
          <div className={styles.panels}>
            <div className={styles.panel}>
              <header className={styles.header}>
                <a className={styles.logo} href="/">
                  <img src="/lily-dex-icon.png" alt="lily dex icon" />
                </a>
                <h1 data-cy="home-page">lily dex</h1>
              </header>
              <h2>
                Track the Pokemon you've captured in Pokemon GO! lily dex is a
                dead-simple app for Pokedex completionists.
              </h2>
              <a href="https://apps.apple.com/us/app/lily-dex/id1525132070">
                <AppStoreBadge />
              </a>
            </div>
            <div className={styles.panel}>
              <img
                className={styles.preview}
                src="/lily-dex-screenshot-2.png"
                alt="lily dex app screenshot"
              />
            </div>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Current GO Dex</h3>
            <p>
              lily dex is dedicated to Pokemon GO. Pokemon are added
              automatically as they are released in-game.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Raid Bosses</h3>
            <p>
              See the current raid bosses and get recommendations when one
              you're missing becomes available.
            </p>
          </div>

          <div className={styles.card}>
            <h3>PvP Battle Rankings</h3>
            <p>
              Browse top-ranked Pokemon for Great, Ultra, and Master League with
              optimal movesets and matchup data.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Shiny Tracking</h3>
            <p>
              For an extra challenge, mark the shiny Pokemon you've captured to
              complete your shiny dex.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Detailed Stats</h3>
            <p>
              View base stats, moves, evolution requirements, buddy distance,
              optimal PvP IVs, and second charge move costs.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Widgets</h3>
            <p>
              See your current Pokedex total along with recently captured Pokemon
              on your home screen.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.thanks}>
            <p>
              Data aggregated from{" "}
              <a
                href="https://github.com/PokeMiners/game_masters"
                target="_blank"
                rel="noopener noreferrer"
              >
                PokeMiners Game Master
              </a>
              ,{" "}
              <a
                href="https://pvpoke.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                PvPoke
              </a>
              , and{" "}
              <a
                href="https://pokemon-go-api.github.io/pokemon-go-api/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pokemon GO API
              </a>
              .{" "}
              <Link href="/docs">
                API Documentation
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          <a
            href="https://mknepprath.com/writing/lily-dex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built by Michael Knepprath
          </a>{" "}
          &bull;{" "}
          <Link href="/docs">
            API Docs
          </Link>
        </p>
      </footer>
    </div>
  );
}
