import { useState, useRef } from 'react';
import Link from 'next/link';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

// import LoadingSpinner from 'components/LoadingSpinner';

export default function Subscribe() {
  const [form, setForm] = useState({ state: '', message: '' });
  const inputEl = useRef(null);

const subscribe = async (e) => {
    e.preventDefault();
    setForm({state: 'loading'});
    const response = await fetch('/api/subscribe', {
        body: JSON.stringify({
            email: inputEl.current.value,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });

    const { error } =  await response.json();
    if (error) {
        // display error message on form
        setForm({
            state: 'error',
            message: error
        });
        return;
    }
    inputEl.current.value = '';
    setForm({
        state: 'success',
        message: `Yay! You're now subscribed to the the list.`
    });
}

 return (
      <>
    <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16" onSubmit={subscribe}>
            <input
            ref={inputEl}
            aria-label="Email for newsletter signup"
            disabled={form.state === 'loading'}
              placeholder="Email"
              type="email"
              autoComplete="email"
              required
              className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              {form.state === 'loading' ? <Spinner /> : 'Subscribe'}
            </button>
          </form>
          {/* <p className="max-w-md mb-2 text-xs text-gray-600 sm:text-sm md:text-center"> */}
            {/* {form.state === 'error' ? <ErrorMessage message={form.message} /> : form.state === 'success' ? <SuccessMessage message={form.message} /> : ''} */}
            <div className="max-w-md mb-2 text-xs text-gray-600 sm:text-sm md:text-center">
            {form.state === 'error' && <ErrorMessage>{form.message}</ErrorMessage>}
            {form.state === 'success' && <SuccessMessage>{form.message}</SuccessMessage>}
            </div>
          {/* </p> */}
          <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
            I won't spam you, and your email address will never be shared with
            anyone else. You're free to unsubscribe at any time.
          </p>
          </>
  );
}
