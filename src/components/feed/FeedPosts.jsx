import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../dropdown/DropdownEditMenu';

import UserImage02 from '../../assets/user-40-02.jpg';
import UserImage03 from '../../assets/user-40-03.jpg';
import UserImage04 from '../../assets/user-40-04.jpg';
import UserImage06 from '../../assets/user-40-06.jpg';
import UserImage08 from '../../assets/user-40-08.jpg';
import CommenterImage04 from '../../assets/user-32-04.jpg';
import CommenterImage05 from '../../assets/user-32-05.jpg';
import FeedImage01 from '../../assets/feed-image-01.jpg';
import FeedImage02 from '../../assets/feed-image-02.jpg';

function FeedPosts() {
  return (
    <>
      {/* Post 1 */}
      <div className="rounded border border-slate-200 bg-white p-5 shadow-md">
        {/* Header */}
        <header className="mb-3 flex items-start justify-between space-x-3">
          {/* User */}
          <div className="flex items-start space-x-3">
            <img
              className="shrink-0 rounded-full"
              src={UserImage03}
              width="40"
              height="40"
              alt="User 03"
            />
            <div>
              <div className="leading-tight">
                <a className="text-sm font-semibold text-slate-800" href="#0">
                  Dominik Lamakani
                </a>
              </div>
              <div className="text-xs text-slate-500">
                Yesterday at 10:48 AM
              </div>
            </div>
          </div>
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex shrink-0">
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                to="#0"
              >
                Option 1
              </Link>
            </li>
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                to="#0"
              >
                Option 2
              </Link>
            </li>
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-rose-500 hover:text-rose-600"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        {/* Body */}
        <div className="mb-5 space-y-2 text-sm text-slate-800">
          <p>👋</p>
          <p>
            It's more likely that people reading your blog will opt in with
            their email addresses if you give them something highly relevant in
            return. Ditch that too-general lead magnet and create "content
            upgrades" for your highest-traffic articles.
          </p>
          <p>Thread 👇</p>
        </div>
        {/* Footer */}
        <footer className="flex items-center space-x-4">
          {/* Like button */}
          <button
            type="button"
            className="flex items-center text-slate-400 hover:text-indigo-500"
          >
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M14.682 2.318A4.485 4.485 0 0011.5 1 4.377 4.377 0 008 2.707 4.383 4.383 0 004.5 1a4.5 4.5 0 00-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 014.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
            <div className="text-sm text-slate-500">4</div>
          </button>
          {/* Share button */}
          <button
            type="button"
            className="flex items-center text-slate-400 hover:text-indigo-500"
          >
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M13 7h2v6a1 1 0 0 1-1 1H4v2l-4-3 4-3v2h9V7ZM3 9H1V3a1 1 0 0 1 1-1h10V0l4 3-4 3V4H3v5Z" />
            </svg>
            <div className="text-sm text-slate-500">44</div>
          </button>
          {/* Replies button */}
          <button
            type="button"
            className="flex items-center text-slate-400 hover:text-indigo-500"
          >
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
            </svg>
            <div className="text-sm text-slate-500">7</div>
          </button>
        </footer>
      </div>

      {/* Post 2 */}
      <div className="rounded border border-slate-200 bg-white p-5 shadow-md">
        {/* Header */}
        <header className="mb-3 flex items-start justify-between space-x-3">
          {/* User */}
          <div className="flex items-start space-x-3">
            <img
              className="shrink-0 rounded-full"
              src={UserImage06}
              width="40"
              height="40"
              alt="User 06"
            />
            <div>
              <div className="leading-tight">
                <a className="text-sm font-semibold text-slate-800" href="#0">
                  Mark Karimani
                </a>
              </div>
              <div className="inline-flex items-center">
                <svg
                  className="mr-1 h-3 w-3 shrink-0 fill-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.953 4.29a.5.5 0 0 0-.454-.29H6.14L6.984.62A.5.5 0 0 0 6.12.174l-6 7A.5.5 0 0 0 .499 8h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                </svg>
                <div className="text-xs text-slate-500">Sponsored</div>
              </div>
            </div>
          </div>
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex shrink-0">
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                to="#0"
              >
                Option 1
              </Link>
            </li>
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                to="#0"
              >
                Option 2
              </Link>
            </li>
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-rose-500 hover:text-rose-600"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        {/* Body */}
        <div className="mb-5 space-y-2 text-sm text-slate-800">
          <p>Designing an Earth-positive future, together 🌿</p>
          <div className="relative !my-4">
            <img
              className="block w-full"
              src={FeedImage01}
              width="590"
              height="332"
              alt="Feed 01"
            />
            <div className="absolute left-0 right-0 bottom-0 bg-black bg-opacity-25 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-slate-300">
                  togethernature.com
                </div>
                <a
                  className="text-xs font-medium text-indigo-400 hover:text-indigo-300"
                  href="#0"
                >
                  Learn More -&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="flex items-center space-x-4">
          {/* Like button */}
          <button
            type="button"
            className="flex items-center text-slate-400 hover:text-indigo-500"
          >
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M14.682 2.318A4.485 4.485 0 0011.5 1 4.377 4.377 0 008 2.707 4.383 4.383 0 004.5 1a4.5 4.5 0 00-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 014.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
            <div className="text-sm text-slate-500">4</div>
          </button>
          {/* Share button */}
          <button
            type="button"
            className="flex items-center text-slate-400 hover:text-indigo-500"
          >
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M13 7h2v6a1 1 0 0 1-1 1H4v2l-4-3 4-3v2h9V7ZM3 9H1V3a1 1 0 0 1 1-1h10V0l4 3-4 3V4H3v5Z" />
            </svg>
            <div className="text-sm text-slate-500">44</div>
          </button>
          {/* Replies button */}
          <button
            type="button"
            className="flex items-center text-slate-400 hover:text-indigo-500"
          >
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
            </svg>
            <div className="text-sm text-slate-500">7</div>
          </button>
        </footer>
      </div>

      {/* Post 3 */}
      <div className="rounded border border-slate-200 bg-white p-5 shadow-md">
        {/* Header */}
        <header className="mb-3 flex items-start justify-between space-x-3">
          {/* User */}
          <div className="flex items-start space-x-3">
            <img
              className="shrink-0 rounded-full"
              src={UserImage04}
              width="40"
              height="40"
              alt="User 04"
            />
            <div>
              <div className="leading-tight">
                <a className="text-sm font-semibold text-slate-800" href="#0">
                  Erica Spriggs
                </a>
              </div>
              <div className="text-xs text-slate-500">Yesterday at 2:34 PM</div>
            </div>
          </div>
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex shrink-0">
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                to="#0"
              >
                Option 1
              </Link>
            </li>
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                to="#0"
              >
                Option 2
              </Link>
            </li>
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-rose-500 hover:text-rose-600"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        {/* Body */}
        <div className="mb-5 space-y-2 text-sm text-slate-800">
          <p>Any book recommendations for a first-time entrepreneur? 📚</p>
        </div>
        {/* Footer */}
        <footer className="flex items-center space-x-4">
          {/* Like button */}
          <button
            type="button"
            className="flex items-center text-slate-400 hover:text-indigo-500"
          >
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M14.682 2.318A4.485 4.485 0 0011.5 1 4.377 4.377 0 008 2.707 4.383 4.383 0 004.5 1a4.5 4.5 0 00-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 014.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
            <div className="text-sm text-slate-500">122</div>
          </button>
          {/* Share button */}
          <button
            type="button"
            className="flex items-center text-slate-400 hover:text-indigo-500"
          >
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M13 7h2v6a1 1 0 0 1-1 1H4v2l-4-3 4-3v2h9V7ZM3 9H1V3a1 1 0 0 1 1-1h10V0l4 3-4 3V4H3v5Z" />
            </svg>
            <div className="text-sm text-slate-500">7</div>
          </button>
          {/* Replies button */}
          <button
            type="button"
            className="flex items-center text-slate-400 hover:text-indigo-500"
          >
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
            </svg>
            <div className="text-sm text-slate-500">298</div>
          </button>
        </footer>
        {/* Comments */}
        <div className="mt-5 border-t border-slate-200 pt-3">
          <ul className="mb-3 space-y-2">
            {/* Comment */}
            <li className="rounded bg-slate-50 p-3">
              <div className="flex items-start space-x-3">
                <img
                  className="shrink-0 rounded-full"
                  src={CommenterImage04}
                  width="32"
                  height="32"
                  alt="User 04"
                />
                <div>
                  <div className="text-xs text-slate-500">
                    <a className="font-semibold text-slate-800" href="#0">
                      Sophie Wenner
                    </a>{' '}
                    · 44min
                  </div>
                  <div className="text-sm">
                    <a
                      className="font-medium text-indigo-500 hover:text-indigo-600"
                      href="#0"
                    >
                      @EricaSpriggs
                    </a>{' '}
                    Reading through and really enjoying "Zero to Sold" by Arvid.
                  </div>
                </div>
              </div>
            </li>
            {/* Comment */}
            <li className="rounded bg-slate-50 p-3">
              <div className="flex items-start space-x-3">
                <img
                  className="shrink-0 rounded-full"
                  src={CommenterImage05}
                  width="32"
                  height="32"
                  alt="User 05"
                />
                <div>
                  <div className="text-xs text-slate-500">
                    <a className="font-semibold text-slate-800" href="#0">
                      Kyla Scanlon
                    </a>{' '}
                    · 1h
                  </div>
                  <div className="text-sm">
                    Depends on the company you're running, but if I had to
                    choose just one book, it'd be The Personal MBA by Josh
                    Kaufman.
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/* Comments footer */}
          <div className="flex justify-between space-x-2">
            <div className="text-sm text-slate-500">
              <span className="font-medium text-slate-600">2</span> of{' '}
              <span className="font-medium text-slate-600">67</span> comments
            </div>
            <button
              type="button"
              className="text-sm  font-medium text-indigo-500 hover:text-indigo-600"
            >
              View More Comments
            </button>
          </div>
          {/* Comment form */}
          <div className="mt-3 flex items-center space-x-3">
            <img
              className="shrink-0 rounded-full"
              src={UserImage02}
              width="32"
              height="32"
              alt="User 02"
            />
            <div className="grow">
              <label htmlFor="comment-form" className="sr-only">
                Write a comment…
              </label>
              <input
                id="comment-form"
                className="form-input w-full border-transparent bg-slate-100 placeholder-slate-500 focus:border-slate-300 focus:bg-white"
                type="text"
                placeholder="Write a comment…"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Post 4 */}
      <div className="rounded border border-slate-200 bg-white p-5 shadow-md">
        {/* Header */}
        <header className="mb-3 flex items-start justify-between space-x-3">
          {/* User */}
          <div className="flex items-start space-x-3">
            <img
              className="shrink-0 rounded-full"
              src={UserImage08}
              width="40"
              height="40"
              alt="User 08"
            />
            <div>
              <div className="leading-tight">
                <a className="text-sm font-semibold text-slate-800" href="#0">
                  Margaret Sullivan
                </a>
              </div>
              <div className="text-xs text-slate-500">Yesterday at 4:56 PM</div>
            </div>
          </div>
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex shrink-0">
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                to="#0"
              >
                Option 1
              </Link>
            </li>
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                to="#0"
              >
                Option 2
              </Link>
            </li>
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-rose-500 hover:text-rose-600"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        {/* Body */}
        <div className="mb-5 space-y-2 text-sm text-slate-800">
          <p>
            Kyla Network - Make new connections, join communities, and access
            exclusive experiences. 🧑‍🤝‍🧑
          </p>
          <div className="relative !my-4 flex items-center justify-center">
            <img
              className="block w-full"
              src={FeedImage02}
              width="590"
              height="332"
              alt="Feed 01"
            />
            <button type="button" className="group absolute">
              <svg
                className="h-16 w-16"
                width="64"
                height="64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-white opacity-80 transition group-hover:opacity-100"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  className="fill-indigo-500"
                  d="M40 33a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 28 26v14.002a.999.999 0 0 0 1.573.819l10-7A.995.995 0 0 0 40 33V33c0 .002 0 .002 0 0Z"
                />
              </svg>
            </button>
            <div className="absolute left-4 bottom-4 right-4">
              <div className="flex items-center space-x-1">
                <div className="bg-black bg-opacity-25 px-2 py-1 text-xs font-medium text-slate-300">
                  0:48
                </div>
                <div className="bg-black bg-opacity-25 px-2 py-1 text-xs font-medium text-slate-300">
                  1M Views
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="flex items-center space-x-4">
          {/* Like button */}
          <button type="button" className="flex items-center text-indigo-400">
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M14.682 2.318A4.485 4.485 0 0011.5 1 4.377 4.377 0 008 2.707 4.383 4.383 0 004.5 1a4.5 4.5 0 00-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 014.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
            <div className="text-sm text-indigo-500">2.2K</div>
          </button>
          {/* Share button */}
          <button
            type="button"
            className="flex items-center text-slate-400 hover:text-indigo-500"
          >
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M13 7h2v6a1 1 0 0 1-1 1H4v2l-4-3 4-3v2h9V7ZM3 9H1V3a1 1 0 0 1 1-1h10V0l4 3-4 3V4H3v5Z" />
            </svg>
            <div className="text-sm text-slate-500">4.3K</div>
          </button>
          {/* Replies button */}
          <button
            type="button"
            className="flex items-center text-slate-400 hover:text-indigo-500"
          >
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
            </svg>
            <div className="text-sm text-slate-500">92</div>
          </button>
        </footer>
      </div>
    </>
  );
}

export default FeedPosts;
