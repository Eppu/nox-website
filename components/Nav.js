import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <Head>
        <title>Nox - Film Development Timer</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1d1d1d" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#0F172A" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Nox is a film development timer for the Apple Watch, helping you never lose track time of time when processing film in the darkroom."
        />
        <meta property="og:title" content="Nox - Film Development Timer" />
        <meta
          property="og:description"
          content="Nox is a film development timer for the Apple Watch, helping you never lose track time of time when processing film in the darkroom."
        />
      </Head>
      <div className="relative flex items-center justify-between">
        <Link
          href="/"
          aria-label="Nox"
          title="Nox"
          className="inline-flex items-center"
        >
          <a>
            <span className="ml-2 text-xl font-normal tracking-wide text-teal-accent-700 uppercase font-title">
              Nox
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
