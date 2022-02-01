import Nav from '../components/Nav';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <div className="bg-slate-900">
      <div className="flex flex-col h-screen justify-between">
        <Nav />
        <div className="flex flex-col items-center max-w-2x1 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg-pt-32 md:px-8">
          <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Coming soon
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-gray-50 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Never</span>
              </span>{' '}
              lose track of your film development timing again.
            </h2>
            <h3 className="max-w-lg text-xl text-leftfont-semibold text-blue-gray-100 mb-12 md:text-xl md:mx-auto">
              Nox is the first multi-step film development timer for the{' '}
              <span>Apple Watch</span>.
            </h3>
            <p className="max-w-lg text-base text-blue-gray-200 md:text-md">
              Sign up to be the first to hear updates about Nox.
            </p>
          </div>
          <Subscribe />
        </div>
        <div className="w-full mx-auto md:w-auto md:max-w-xs lg:max-w-s" />
        <img
          src="/nox.webp"
          className="bg-slate-900 w-full mx-auto sm:max-w-xs md:w-auto md:max-w-sm lg:max-w-sm xl:max-w-sm"
          alt="A screenshot of the Nox development timer app on the Apple Watch"
        />
      </div>
    </div>
  );
}
