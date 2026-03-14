import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Docs.module.css";

const BASE_URL = "https://mknepprath.github.io/lily-dex-api";

const endpoints = [
  {
    name: "Pokedex",
    path: "/pokedex.json",
    description:
      "Complete Pokemon GO Pokedex with stats, moves, types, evolutions, forms, buddy distance, PvP IVs, and sprite URLs.",
    fields: [
      { name: "id", type: "string", desc: "Pokemon species ID (e.g. BULBASAUR)" },
      { name: "formId", type: "string", desc: "Form identifier" },
      { name: "dexNr", type: "number", desc: "National Pokedex number" },
      { name: "generation", type: "number", desc: "Generation (1-9)" },
      { name: "names", type: "object", desc: "Localized names (English, Japanese, Korean, etc.)" },
      { name: "stats", type: "object", desc: "Base stats: { stamina, attack, defense }" },
      { name: "primaryType", type: "object", desc: "Primary type with localized names" },
      { name: "secondaryType", type: "object | null", desc: "Secondary type, if any" },
      { name: "pokemonClass", type: "string | null", desc: "LEGENDARY, MYTHIC, or ULTRA_BEAST" },
      { name: "quickMoves", type: "object", desc: "Available fast moves with stats and PvP data" },
      { name: "cinematicMoves", type: "object", desc: "Available charged moves with stats and PvP data" },
      { name: "eliteQuickMoves", type: "object | []", desc: "Elite TM fast moves" },
      { name: "eliteCinematicMoves", type: "object | []", desc: "Elite TM charged moves" },
      { name: "evolutions", type: "array", desc: "Evolution branches with candy, items, buddy distance, time-of-day, gender, lure, and trade requirements" },
      { name: "regionForms", type: "object | []", desc: "Alolan, Galarian, Hisuian, Paldean forms with their own stats and moves" },
      { name: "megaEvolutions", type: "array", desc: "Mega evolution stats and type overrides" },
      { name: "buddyDistance", type: "number", desc: "Buddy walk distance in km" },
      { name: "thirdMoveCost", type: "number | null", desc: "Stardust cost for second charged move" },
      { name: "defaultIVs", type: "object | null", desc: "Optimal PvP IVs per league (cp500, cp1500, cp2500)" },
      { name: "assets", type: "object", desc: "Official artwork URLs (image, shinyImage)" },
      { name: "pixelSprites", type: "object", desc: "Pixel sprite URLs (image, shinyImage)" },
    ],
  },
  {
    name: "PvP Rankings",
    path: "/rankings.json",
    description:
      "Top 100 ranked Pokemon for Great League (1500 CP), Ultra League (2500 CP), and Master League with recommended movesets, matchups, and counters. Sourced from PvPoke.",
    fields: [
      { name: "great", type: "array", desc: "Great League top 100" },
      { name: "ultra", type: "array", desc: "Ultra League top 100" },
      { name: "master", type: "array", desc: "Master League top 100" },
    ],
    subfields: [
      { name: "rank", type: "number", desc: "Ranking position (1-100)" },
      { name: "speciesId", type: "string", desc: "PvPoke species ID" },
      { name: "speciesName", type: "string", desc: "Display name" },
      { name: "dexNr", type: "number | null", desc: "National Pokedex number" },
      { name: "rating", type: "number", desc: "PvPoke rating score" },
      { name: "moveset", type: "string[]", desc: "Recommended moves (fast + charged)" },
      { name: "matchups", type: "array", desc: "Top 5 favorable matchups" },
      { name: "counters", type: "array", desc: "Top 5 counters" },
    ],
  },
  {
    name: "Raid Bosses",
    path: "/raidboss.json",
    description:
      "Current raid bosses organized by tier, including CP ranges, weather boosts, and type information.",
  },
  {
    name: "Max Battles",
    path: "/maxbattles.json",
    description: "Current Max Battle (Dynamax) Pokemon available in-game.",
  },
  {
    name: "Types",
    path: "/types.json",
    description:
      "Pokemon type effectiveness chart with damage multipliers and weather boost associations.",
  },
  {
    name: "Quests",
    path: "/quests.json",
    description: "Special research and field research quest data.",
  },
  {
    name: "Events",
    path: "/events.json",
    description:
      "Pokemon GO events parsed from the GO Calendar ICS feed. Timestamps are naive (no timezone) so they can be interpreted in the user's local timezone, matching how Pokemon GO events work.",
    fields: [
      { name: "id", type: "string", desc: "Unique event identifier" },
      { name: "summary", type: "string", desc: "Original ICS summary with tag prefix" },
      { name: "tag", type: "string", desc: "Event type tag (CD, RB, RH, SH, MM, MB, GBL, E, R, RD, GP, PGF)" },
      { name: "title", type: "string", desc: "Clean event title without tag prefix" },
      { name: "description", type: "string", desc: "Event description text" },
      { name: "startDate", type: "string", desc: "Start date/time as naive string (e.g. 2026-03-14T14:00:00)" },
      { name: "endDate", type: "string", desc: "End date/time as naive string" },
      { name: "isAllDay", type: "boolean", desc: "Whether this is an all-day event" },
      { name: "url", type: "string | null", desc: "Leek Duck event page URL" },
      { name: "imageURL", type: "string | null", desc: "Event image URL" },
      { name: "pokemonDexNrs", type: "number[]", desc: "Matched Pokemon national dex numbers" },
    ],
  },
  {
    name: "Meta",
    path: "/meta.json",
    description:
      "Build metadata including timestamp, source statuses, Pokemon count, and API version.",
    fields: [
      { name: "buildTime", type: "string", desc: "ISO 8601 timestamp of last build" },
      { name: "sources", type: "object", desc: "Status of each data source (fresh or cached)" },
      { name: "pokemonCount", type: "number", desc: "Total released Pokemon count" },
      { name: "version", type: "string", desc: "API version" },
    ],
  },
];

export default function Docs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>API Documentation - lily dex</title>
        <link rel="icon" href="/lily-dex-icon.png" />
        <meta
          name="description"
          content="lily dex API documentation. Pokemon GO data including Pokedex, PvP rankings, raid bosses, and more."
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.backLink}>
            <img
              src="/lily-dex-icon.png"
              alt="lily dex"
              className={styles.headerIcon}
            />
            lily dex
          </Link>
          <span className={styles.version}>API v1.1.0</span>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>API Documentation</h1>
          <p>
            The lily dex API provides Pokemon GO game data as static JSON files,
            updated automatically every 6 hours. Data is aggregated from{" "}
            <a href="https://github.com/PokeMiners/game_masters" target="_blank" rel="noopener noreferrer">
              PokeMiners Game Master
            </a>
            ,{" "}
            <a href="https://pvpoke.com" target="_blank" rel="noopener noreferrer">
              PvPoke
            </a>
            , the{" "}
            <a href="https://pokemon-go-api.github.io/pokemon-go-api/" target="_blank" rel="noopener noreferrer">
              Pokemon GO API
            </a>
            , and the{" "}
            <a href="https://github.com/othyn/go-calendar" target="_blank" rel="noopener noreferrer">
              GO Calendar
            </a>
            .
          </p>

          <div className={styles.baseUrl}>
            <span className={styles.label}>Base URL</span>
            <code>{BASE_URL}</code>
          </div>

          <div className={styles.notice}>
            This API is primarily built for the{" "}
            <a href="https://apps.apple.com/us/app/lily-dex/id1525132070">
              lily dex iOS app
            </a>
            . It's public and free to use, but please be considerate with request
            volume. No authentication required.
          </div>
        </div>

        <nav className={styles.toc}>
          <h2>Endpoints</h2>
          <ul>
            {endpoints.map((ep) => (
              <li key={ep.path}>
                <a href={`#${ep.path.replace(/[/.]/g, "")}`}>{ep.name}</a>
                <code className={styles.tocPath}>{ep.path}</code>
              </li>
            ))}
          </ul>
        </nav>

        {endpoints.map((ep) => (
          <section
            key={ep.path}
            id={ep.path.replace(/[/.]/g, "")}
            className={styles.endpoint}
          >
            <div className={styles.endpointHeader}>
              <h2>{ep.name}</h2>
              <span className={styles.method}>GET</span>
            </div>
            <code className={styles.url}>
              {BASE_URL}
              {ep.path}
            </code>
            <p>{ep.description}</p>

            {ep.fields && (
              <div className={styles.fieldsTable}>
                <h3>Response Fields</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ep.fields.map((f) => (
                      <tr key={f.name}>
                        <td>
                          <code>{f.name}</code>
                        </td>
                        <td className={styles.typeCell}>{f.type}</td>
                        <td>{f.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {ep.subfields && (
              <div className={styles.fieldsTable}>
                <h3>Ranking Entry Fields</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ep.subfields.map((f) => (
                      <tr key={f.name}>
                        <td>
                          <code>{f.name}</code>
                        </td>
                        <td className={styles.typeCell}>{f.type}</td>
                        <td>{f.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className={styles.example}>
              <h3>Example</h3>
              <pre>
                <code>
                  {`curl ${BASE_URL}${ep.path}`}
                </code>
              </pre>
            </div>
          </section>
        ))}

        <section className={styles.endpoint}>
          <h2>Data Freshness</h2>
          <p>
            All data is rebuilt every 6 hours via GitHub Actions. The{" "}
            <code>/meta.json</code> endpoint includes the last build timestamp
            and status of each upstream source. If an upstream source is
            unavailable, the API falls back to the most recent cached version.
          </p>
          <h3>Source Priority</h3>
          <ul className={styles.sourceList}>
            <li>
              <strong>PokeMiners Game Master</strong> — stats, moves, evolution
              requirements, buddy distance
            </li>
            <li>
              <strong>PvPoke</strong> — released Pokemon, PvP rankings, optimal
              IVs, second charge move costs
            </li>
            <li>
              <strong>Pokemon GO API</strong> — localized names, raid bosses,
              types, sprites
            </li>
            <li>
              <strong>GO Calendar</strong> — event schedule (Community Days,
              Raid Hours, Spotlight Hours, GO Fest, etc.)
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          <Link href="/">lily dex</Link> &bull;{" "}
          <a
            href="https://mknepprath.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michael Knepprath
          </a>
        </p>
      </footer>
    </div>
  );
}
