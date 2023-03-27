import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import EditMenu from '../components/DropdownEditMenu';
import DownloadButton from '../components/HoverDownloadButton';
import { FileIcon } from '../components/common/icons';
import MeetupPhoto01 from '../assets/meetup-photo-01.jpg';
import MeetupPhoto02 from '../assets/meetup-photo-02.jpg';
import MeetupPhoto03 from '../assets/meetup-photo-03.jpg';
import Comments from '../components/NoticeComments';

function NoticeDetail() {
  const [notice, setNotice] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

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
        console.log(data);
        setNotice(data);
      })
      .catch((response) => console.log(response));
  }, []);

  const changePrivacy = () => {
    let status;
    if (window.confirm('Are you sure to change privacy setting?')) {
      switch (notice.status) {
        case 10:
        case 20:
          status = 30;
          break;
        case 30:
          status = 10;
          break;
        default:
          console.log('Wrong status value');
      }

      fetch('/api/notice', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: notice.id,
          status,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            console('Status Not Updated');
            return Promise.reject(response);
          }
          return response.json();
        })
        .then((data) => {
          alert('Status Updated');
          navigate(`/notice/detail/${data.id}`);
        })
        .catch((response) => {
          console.log(response.status + response.statusText);
          navigate('/notice/list');
        });
    }
  };

  const deleteNotice = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete notice ${id}?`
    );
    if (confirmDelete) {
      fetch(`/api/notice/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        if (response.status === 204) {
          alert('Notice deleted');
          navigate('/notice/list');
        } else {
          alert('Notice not deleted');
        }
      });
    }
  };

  return (
    <article className="rounded border border-slate-200 bg-white p-5 shadow-md">
      {/* Breadcrumbs */}
      <div className="mb-2">
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
      <header className="pb-4">
        {/* Title */}
        <div className="mb-3 flex place-content-between space-x-3">
          <h2 className="text-2xl font-bold text-slate-800">
            {notice && notice.title}
          </h2>
          {/* Menu button for Team Managers */}
          <div className="relative">
            <EditMenu
              align="right"
              className="absolute top-0 right-0 inline-flex"
            >
              <li>
                <Link
                  className="flex py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                  to={`/notice/update/${id}`}
                >
                  Edit
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="flex py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                  onClick={changePrivacy}
                >
                  {/* public or private */}
                  {notice && notice.status === 30 ? 'Public' : 'Private'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex py-1 px-3 text-sm font-medium text-rose-500 hover:text-rose-600"
                  onClick={deleteNotice}
                >
                  Remove
                </button>
              </li>
            </EditMenu>
          </div>
        </div>
        {/* Meta */}
        <div className="flex flex-wrap text-sm">
          <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-['']">
            <a
              className="font-medium text-indigo-500 hover:text-indigo-600"
              href="#0"
            >
              {notice && notice.creator.email}
            </a>
          </div>
          <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 last:after:content-['']">
            <span className="text-slate-500">
              {notice && new Date(notice.createdAt).toLocaleDateString('en-US')}
            </span>
          </div>
        </div>
      </header>
      {/* Content */}
      <div className="mb-6 space-y-4">{notice && notice.content}</div>
      <hr className="my-6 border-t border-slate-200" />

      {/* Photos */}
      <div>
        <h2 className="mb-2 text-xl font-bold leading-snug text-slate-800">
          Photos (3)
        </h2>
        <div className="my-6 grid grid-cols-3 gap-4">
          <a className="block" href="#0">
            <div className="max-w-sx group relative overflow-hidden bg-cover bg-no-repeat">
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
            <div className="max-w-sx group relative overflow-hidden bg-cover bg-no-repeat">
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
            <div className="max-w-sx group relative overflow-hidden bg-cover bg-no-repeat">
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
        <h2 className="mb-2 text-xl font-bold leading-snug text-slate-800">
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
              <span className="text-xs font-normal text-slate-500">
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
              <span className="text-xs font-normal text-slate-500">
                {' '}
                (243KB)
              </span>
            </Link>
          </li>{' '}
        </ul>
      </div>
      <hr className="my-6 border-t border-slate-200" />

      {/* Comments */}
      <Comments />
    </article>
  );
}

export default NoticeDetail;
