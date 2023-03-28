import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import Tooltip from '../../components/Tooltip';
import FileIcon from '../../components/common/icons/FileIcon';
import CloseIcon from '../../components/common/icons/CloseIcon';
import MeetupPhoto01 from '../../assets/meetup-photo-01.jpg';
import MeetupPhoto02 from '../../assets/meetup-photo-02.jpg';
import MeetupPhoto03 from '../../assets/meetup-photo-03.jpg';

function NoticeUpdate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [privacy, setPrivacy] = useState('Public');
  const [notification, setNotification] = useState(false);
  const [fixedOnTop, setFixedOnTop] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
    fetch(`/api/notice/${id}`)
      .then((response) => {
        if (!response.ok) {
          alert("Notice doesn't exist");
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        // eslint-disable-next-line no-unused-expressions
        switch (data.status) {
          case 20:
            setFixedOnTop(true);
            break;
          case 30:
            setPrivacy('Private');
            break;
          default:
            console.log('Wrong status value');
        }
        if (data.notification === 20) {
          setNotification(true);
        }
      })
      .catch((response) => console.log(response));
  }, []);

  const goToPrevPage = () => {
    navigate(-1);
  };
  const updateNotice = () => {
    let status;

    if (privacy === 'Public') {
      status = 10;
      if (fixedOnTop) {
        status = 20;
      }
    } else {
      status = 30;
    }

    fetch('/api/notice', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title,
        content,
        status,
        notification: notification ? 20 : 10,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          alert('Notice Not Updated');
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        alert('Notice Updated');
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
      <div className="rounded border border-slate-200 bg-white p-5 shadow-md">
        <div className="mb-4">
          <ul className="inline-flex flex-wrap text-sm font-medium">
            <li className="flex items-center">
              <Link className="text-slate-500 hover:text-indigo-500" to="/">
                Home
              </Link>
              <svg
                className="mx-2 h-4 w-4 fill-current text-slate-400"
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
        <header className="mb-4 flex items-start justify-between space-x-3">
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
                className="mb-1 block text-sm font-medium"
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
              value={title}
              placeholder="mandatory, tooltip message, red border in case of error"
              onChange={onTitleHandler}
            />
          </div>
          <div className="mt-1 text-xs text-rose-500">
            This field is required!
          </div>
        </div>
        <div className="mb-3">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="mb-1 block text-sm font-medium"
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
              value={content}
              onChange={onContentHandler}
            />
          </div>
        </div>
        <div className="mb-4">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="mb-1 block text-sm font-medium"
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
            <div className="-m-3 flex flex-wrap items-center">
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
                  <span className="ml-2 text-sm">Public</span>
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
                  <span className="ml-2 text-sm">Private</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="mb-1 block text-sm font-medium"
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
                  checked={notification}
                  onChange={onNotificationHandler}
                />
                <label className="bg-slate-400" htmlFor="switch-1">
                  <span className="bg-white shadow-sm" aria-hidden="true" />
                  <span className="sr-only">Switch label</span>
                </label>
              </div>
              <div className="ml-2 text-sm italic text-slate-400">On</div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="mb-1 block text-sm font-medium"
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
                  checked={fixedOnTop}
                  onChange={onFixedOnTopHandler}
                />
                <label className="bg-slate-400" htmlFor="switch-2">
                  <span className="bg-white shadow-sm" aria-hidden="true" />
                  <span className="sr-only">Switch label</span>
                </label>
              </div>
              <div className="ml-2 text-sm italic text-slate-400">On</div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-slate-200" />
        <div className="items-start space-x-3">
          <div className="w-full">
            <div className="flex w-full items-center leading-tight">
              <FileIcon />
              <span>file.txt</span>
              <CloseIcon />
            </div>
            <div className="flex w-full items-center leading-tight">
              <FileIcon />
              <span>file.txt</span>
              <CloseIcon />
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-slate-200" />
        {/* Photos */}
        <div>
          <h2 className="mb-2 text-xl font-bold leading-snug text-slate-800">
            Photos (3)
          </h2>
          <div className="my-6 grid grid-cols-3 gap-4">
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
          <div className="w-full text-right">
            <button
              onClick={goToPrevPage}
              type="button"
              className="btn mr-2 border-slate-200 text-slate-600 hover:border-slate-300"
            >
              Cancel
            </button>
            <button
              onClick={updateNotice}
              type="submit"
              className="btn bg-indigo-500 text-white hover:bg-indigo-600"
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

export default NoticeUpdate;
