import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import BasicAPI from '../services/api';
import AuthImage from '../assets/auth-image.jpg';
import AuthDecoration from '../assets/auth-decoration.png';

function Signup() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = () => {
    BasicAPI({
      url: '/api/account/signup',
      method: 'POST',
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        password,
      }),
      handleSuccess: () => {
        navigate('/login');
      },
      handleError: (response) => {
        console.error(
          `Fail Login API Status: ${response.status} and Message: ${response.statusText}`
        );
      },
    });
  };

  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="flex h-full min-h-screen flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" to="/">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <defs>
                      <linearGradient
                        x1="28.538%"
                        y1="20.229%"
                        x2="100%"
                        y2="108.156%"
                        id="logo-a"
                      >
                        <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                        <stop stopColor="#A5B4FC" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="88.638%"
                        y1="29.267%"
                        x2="22.42%"
                        y2="100%"
                        id="logo-b"
                      >
                        <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                        <stop stopColor="#38BDF8" offset="100%" />
                      </linearGradient>
                    </defs>
                    <rect fill="#6366F1" width="32" height="32" rx="16" />
                    <path
                      d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                      fill="#4F46E5"
                    />
                    <path
                      d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                      fill="url(#logo-a)"
                    />
                    <path
                      d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                      fill="url(#logo-b)"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mx-auto max-w-sm px-4 py-8">
              <h1 className="mb-6 text-3xl font-bold text-slate-800">
                Create your Account ✨
              </h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium"
                      htmlFor="email"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      className="form-input w-full"
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium"
                      htmlFor="name"
                    >
                      First Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="first_name"
                      className="form-input w-full"
                      type="text"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium"
                      htmlFor="name"
                    >
                      Last Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="last_name"
                      className="form-input w-full"
                      type="text"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="items-right mt-6 flex justify-end">
                  {/* <div className="mr-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm ml-2">Email me about product news.</span>
                    </label>
                  </div> */}
                  <button
                    type="button"
                    className="btn ml-3 whitespace-nowrap bg-indigo-500 text-white hover:bg-indigo-600"
                    onClick={handleSignup}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className="mt-6 border-t border-slate-200 pt-5">
                <div className="text-sm">
                  Have an account?{' '}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="absolute inset-y-0 right-0 hidden md:block md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="h-full w-full object-cover object-center"
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
          <img
            className="absolute top-1/4 left-0 ml-8 hidden -translate-x-1/2 lg:block"
            src={AuthDecoration}
            width="218"
            height="224"
            alt="Authentication decoration"
          />
        </div>
      </div>
    </main>
  );
}

export default Signup;
