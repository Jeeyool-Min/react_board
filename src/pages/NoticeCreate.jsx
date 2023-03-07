/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tooltip from '../components/Tooltip';
import { FileIcon, CloseIcon } from '../components/common/Icons';
import MeetupPhoto01 from '../assets/meetup-photo-01.jpg';
import MeetupPhoto02 from '../assets/meetup-photo-02.jpg';
import MeetupPhoto03 from '../assets/meetup-photo-03.jpg';

function NoticeCreate() {
  const navigate = useNavigate();
  // const creator = ''; // initialize it with session.userID
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [privacy, setPrivacy] = useState('Public');
  const [notification, setNotification] = useState(false);
  const [fixedOnTop, setFixedOnTop] = useState(false);

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const onContentHandler = (event) => {
    setContent(event.currentTarget.value);
  };
  const onPrivacyHandler = (event) => {
    setPrivacy(event.currentTarget.value);
  };
  const onNotificationHandler = () => {
    setNotification(!notification);
  };
  const onFixedOnTopHandler = () => {
    setFixedOnTop(!fixedOnTop);
  };
  // It will change we add other props such as files, photos, status (notification and public/private)
  const createNotice = () => {
    let status;

    if (privacy === 'Public') {
      status = 10; // General
      if (fixedOnTop) {
        status = 20; // Fixed On Top
      }
    } else {
      status = 30; // Private
    }

    fetch('/api/Notice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        creator: 'jeeyool',
        status,
        notification: notification ? 20 : 10,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          alert('Notice Not Created');
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        alert('Notice Created');
        console.log(data);
        navigate(`/notice/detail/${data.id}`);
      })
      .catch((response) => {
        console.log(response.status + response.statusText);
        navigate('/notice/list');
      });
  };

  return (
    <>
      {/* Post 3 */}
      <div className="bg-white shadow-md rounded border border-slate-200 p-5">
        <div className="mb-4">
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
        <header className="flex justify-between items-start space-x-3 mb-4">
          {/* User */}
          <div className="flex items-start space-x-3">
            <div>
              <div className="leading-tight">
                <a className="text-sm font-semibold text-slate-800" href="#0">
                  Add New Notice
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Body */}
        <div className="mb-3">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="tooltip"
              >
                Title
                <span className="text-rose-500">*</span>
              </label>
              <Tooltip className="ml-2" bg="dark" size="md">
                <div className="text-sm text-slate-200">
                  Input title for the new notice
                </div>
              </Tooltip>
            </div>
            <input
              id="tooltip"
              className="form-input w-full border-rose-300"
              type="text"
              placeholder="mandatory, tooltip message, red border in case of error"
              onChange={onTitleHandler}
            />
          </div>
          <div className="text-xs mt-1 text-rose-500">
            This field is required!
          </div>
        </div>
        <div className="mb-3">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="tooltip"
              >
                Content
              </label>
              <Tooltip className="ml-2" bg="dark" size="md">
                <div className="text-sm text-slate-200">
                  Input content for the new notice
                </div>
              </Tooltip>
            </div>
            <textarea
              id="feedback"
              className="form-textarea w-full px-2 py-1"
              rows="8"
              required=""
              onChange={onContentHandler}
            />
          </div>
        </div>
        <div className="mb-4">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="tooltip"
              >
                Public/Private
              </label>
              <Tooltip className="ml-2" bg="dark" size="md">
                <div className="text-sm text-slate-200">
                  Input content for the new notice
                </div>
              </Tooltip>
            </div>
            <div className="flex flex-wrap items-center -m-3">
              <div className="m-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-buttons"
                    className="form-radio"
                    checked={privacy === 'Public'}
                    id="public"
                    value="Public"
                    onChange={onPrivacyHandler}
                  />
                  <span className="text-sm ml-2">Public</span>
                </label>
              </div>
              <div className="m-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-buttons"
                    className="form-radio"
                    checked={privacy === 'Private'}
                    id="private"
                    value="Private"
                    onChange={onPrivacyHandler}
                  />
                  <span className="text-sm ml-2">Private</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="tooltip"
              >
                Notification
              </label>
              <Tooltip className="ml-2" bg="dark" size="md">
                <div className="text-sm text-slate-200">
                  Input content for the new notice
                </div>
              </Tooltip>
            </div>
            <div className="flex items-center">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="switch-1"
                  className="sr-only"
                  onChange={onNotificationHandler}
                />
                <label className="bg-slate-400" htmlFor="switch-1">
                  <span className="bg-white shadow-sm" aria-hidden="true" />
                  <span className="sr-only">Switch label</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">On</div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="tooltip"
              >
                Fixed Top
              </label>
              <Tooltip className="ml-2" bg="dark" size="md">
                <div className="text-sm text-slate-200">test</div>
              </Tooltip>
            </div>
            <div className="flex items-center">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="switch-2"
                  className="sr-only"
                  onChange={onFixedOnTopHandler}
                />
                <label className="bg-slate-400" htmlFor="switch-2">
                  <span className="bg-white shadow-sm" aria-hidden="true" />
                  <span className="sr-only">Switch label</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">On</div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-slate-200" />
        <div className="items-start space-x-3">
          <div className="w-full">
            <div className="leading-tight w-full flex items-center">
              <FileIcon />
              <span>file.txt</span>
              <CloseIcon />
            </div>
            <div className="leading-tight w-full flex items-center">
              <FileIcon />
              <span>file.txt</span>
              <CloseIcon />
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-slate-200" />
        {/* Photos */}
        <div>
          <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
            Photos (3)
          </h2>
          <div className="grid grid-cols-3 gap-4 my-6">
            <a className="block" href="#0">
              <img
                className="w-full rounded-sm"
                src={MeetupPhoto01}
                width="203"
                height="152"
                alt="Meetup 01"
              />
            </a>
            <a className="block" href="#0">
              <img
                className="w-full rounded-sm"
                src={MeetupPhoto02}
                width="203"
                height="152"
                alt="Meetup 02"
              />
            </a>
            <a className="block" href="#0">
              <img
                className="w-full rounded-sm"
                src={MeetupPhoto03}
                width="203"
                height="152"
                alt="Meetup 03"
              />
            </a>
          </div>
        </div>
        {/* Footer */}
        <footer className="flex items-center space-x-4">
          <div className="text-right w-full">
            <button
              type="button"
              className="btn border-slate-200 hover:border-slate-300 text-slate-600 mr-2"
            >
              Cancel
            </button>
            <button
              onClick={createNotice}
              type="submit"
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              Save
            </button>
          </div>
        </footer>
        {/* Comments */}
      </div>
    </>
  );
}

export default NoticeCreate;
