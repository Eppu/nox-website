import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between bg-slate-900">
      <Nav />
      {/* <div className="flex flex-col justify-center items-center h-full"> */}
      <div className="flex flex-col items-center max-w-2x1 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg-pt-32 md:px-8">
        {/* <div className="flex flex-col items-center justify-between max-w-2x1 px-4 pt-16 m-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8 h-full "> */}
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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
              <span className="relative">The</span>
            </span>{" "}
            quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base text-blue-gray-100 md:text-lg">
            Sign up to be the first to know about beta tests and launch dates
            for Nox.
          </p>
        </div>
        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
            placeholder="Email"
            required=""
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Subscribe
          </button>
        </form>
        <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
      <img
        src="https://kitwind.io/assets/kometa/half-phone.png"
        className="w-full mx-auto md:w-auto md:max-w-xs lg:max-w-s xl:max-w-"
        alt=""
      />
      {/* </div> */}
    </div>
  );
}
