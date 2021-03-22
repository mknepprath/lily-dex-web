import Head from "next/head";

import AppStoreBadge from "../components/app-store-badge";
import ButtondownForm from "../components/buttondown-form";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>lily dex</title>
        <link rel="icon" href="/lily-dex-icon.png" />
      </Head>

      <div className={styles.section + " " + styles.hero}>
        {/* https://css-tricks.com/creating-non-rectangular-headers/ */}
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
                <h1>lily dex</h1>
              </header>
              <h2>
                Track the Pokémon you've captured in Pokémon GO! lily dex is a
                dead-simple app for Pokédex completionists.
              </h2>
              <a href="https://apps.apple.com/us/app/lily-dex/id1525132070">
                <AppStoreBadge />
              </a>
            </div>
            <div className={styles.panel}>
              <img
                className={styles.preview}
                src="/lily-dex-screenshot-2.png"
              />
            </div>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Join the Mailing List</h1>

        <p className={styles.description}>
          Sign up for updates as we prepare to launch lily dex.
        </p>

        <ButtondownForm />

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Current GO Dex</h3>
            <p>
              lily dex is dedicated to Pokémon GO, Pokémon are added as they are
              released in-game.
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
            <h3>Shiny Tracking</h3>
            <p>
              For an extra challenge, mark the shiny Pokémon you've captured to
              complete your shiny dex.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Widgets</h3>
            <p>
              See the your current Pokédex total along with recently captured
              Pokémon on your home screen.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://mknepprath.com/writing/lily-dex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by Michael Knepprath
        </a>
      </footer>
    </div>
  );
}
