import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <a>
            <span className="ml-2 text-xl font-bold tracking-wide text-teal-accent-700 uppercase">
              Nox
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
