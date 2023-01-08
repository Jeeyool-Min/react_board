import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../components/DropdownEditMenu';
import DownloadButton from '../components/HoverDownloadButton';
import { FileIcon } from '../components/common/Icons';
import MeetupPhoto01 from '../assets/meetup-photo-01.jpg';
import MeetupPhoto02 from '../assets/meetup-photo-02.jpg';
import MeetupPhoto03 from '../assets/meetup-photo-03.jpg';

function NoticeDetail() {
  return (
    <article className="bg-white shadow-md rounded border border-slate-200 p-5">
      {/* Breadcrumbs */}
      <div className="mb-2">
        <ul className="inline-flex flex-wrap text-sm font-medium">
          <li className="flex items-center">
            <Link className="text-slate-500 hover:text-indigo-500" to="/">
              Home
            </Link>
            <svg
              className="h-4 w-4 fill-current text-slate-400 mx-2"
              viewBox="0 0 16 16"
            >
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </li>
          <li className="flex items-center">
            <Link
              className="text-slate-500 hover:text-indigo-500"
              to="/notice/list"
            >
              Notice
            </Link>
          </li>
        </ul>
      </div>
      {/* Header */}
      <header className="pb-4">
        {/* Title */}
        <div className="flex place-content-between space-x-3 mb-3">
          <h2 className="text-2xl text-slate-800 font-bold">
            where else should I promote my new project? 🤔
          </h2>
          {/* Menu button for Team Managers */}
          <div className="relative">
            <EditMenu
              align="right"
              className="absolute top-0 right-0 inline-flex"
            >
              <li>
                <Link
                  className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                  to="#0"
                >
                  Edit
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                  to="#0"
                >
                  {/* public or private */}
                  Private
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                  to="#0"
                >
                  Remove
                </Link>
              </li>
            </EditMenu>
          </div>
        </div>
        {/* Meta */}
        <div className="flex flex-wrap text-sm">
          <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
            <a
              className="font-medium text-indigo-500 hover:text-indigo-600"
              href="#0"
            >
              katemerlu
            </a>
          </div>
          <div className="flex items-center after:block last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
            <span className="text-slate-500">2023-01-01</span>
          </div>
        </div>
      </header>
      {/* Content */}
      <div className="space-y-4 mb-6">
        <p>
          Looking for new ideas to get users, receive feedback, and increase
          exposure! Besides PH, where else do you showcase your product?
        </p>
        <p className="mb-6">
          There is so much happening in the AI space. Advances in the economic
          sectors have seen automated business practices rapidly increasing
          economic value. While the realm of the human sciences has used the
          power afforded by computational capabilities to solve many human based
          dilemmas. Even the art scene has adopted carefully selected ML
          applications to usher in the technological movement.
        </p>
        <p className="mb-6">
          There is so much happening in the AI space. Advances in the economic
          sectors have seen automated business practices rapidly increasing
          economic value. While the realm of the human sciences has used the
          power afforded by computational capabilities to solve many human based
          dilemmas. Even the art scene has adopted carefully selected ML
          applications to usher in the technological movement.
        </p>
        <p>Please advise 🙌</p>
      </div>
      <hr className="my-6 border-t border-slate-200" />

      {/* Photos */}
      <div>
        <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
          Photos (3)
        </h2>
        <div className="grid grid-cols-3 gap-4 my-6">
          <a className="block" href="#0">
            <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-sx group">
              <img
                className="w-full rounded-sm"
                src={MeetupPhoto01}
                width="203"
                height="152"
                alt="Meetup 01"
              />
              <DownloadButton />
            </div>
          </a>
          <a className="block" href="#0">
            <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-sx group">
              <img
                className="w-full rounded-sm"
                src={MeetupPhoto02}
                width="203"
                height="152"
                alt="Meetup 02"
              />
              <DownloadButton />
            </div>
          </a>
          <a className="block" href="#0">
            <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-sx group">
              <img
                className="w-full rounded-sm"
                src={MeetupPhoto03}
                width="203"
                height="152"
                alt="Meetup 03"
              />
              <DownloadButton />
            </div>
          </a>
        </div>
      </div>
      <hr className="my-6 border-t border-slate-200" />

      {/* Files */}
      <div>
        <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
          Files (3)
        </h2>
        <ul>
          <li>
            <FileIcon />
            <Link
              className="mb-1 font-medium text-slate-500 hover:text-indigo-500"
              to="#0"
            >
              EventBudget.xlsm
              <span className="text-slate-500 font-normal text-xs">
                {' '}
                (243KB)
              </span>
            </Link>
          </li>
          <li>
            <FileIcon />
            <Link
              className="font-medium text-slate-500 hover:text-indigo-500"
              to="#0"
            >
              EventDescription.pdf
              <span className="text-slate-500 font-normal text-xs">
                {' '}
                (243KB)
              </span>
            </Link>
          </li>
          {' '}
        </ul>
      </div>
    </article>
  );
}

export default NoticeDetail;
