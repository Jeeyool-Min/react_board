import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NoticesTableItem({
  id,
  handleClick,
  isChecked,
  status,
  title,
  creator,
  writtendate,
  page,
  setNotices,
  setPage,
  setTotalPages,
}) {
  const navigate = useNavigate();
  const deleteNotice = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete notice ${id}?`,
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

          fetch(`/api/notice/list?page=${page - 1}`)
            .then((res) => {
              if (!res.ok) {
                alert("Notice doesn't exist");
                return Promise.reject(res);
              }
              return res.json();
            })
            .then((data) => {
              setNotices(data.content);
              setPage(data.number + 1);
              setTotalPages(data.totalPages);
            })
            .catch((res) => console.log(res));
        } else {
          alert('Notice not deleted');
        }
      });
    }
  };
  const updateNotice = () => {
    navigate(`/notice/update/${id}`);
  };

  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input
              id={id}
              className="form-checkbox"
              type="checkbox"
              onChange={handleClick}
              checked={isChecked}
            />
          </label>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-sky-500">{id}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className={`font-medium ${status}`}>
          <Link to={`/notice/detail/${id}`}>{title}</Link>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div
          className={`inline-flex font-medium rounded-full text-center px-2.5 py-0.5 $status,
          )}`}
        >
          {status}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">{creator}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div>
          {writtendate && new Date(writtendate).toLocaleDateString('en-US')}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="space-x-1">
          <button
            type="button"
            className="text-slate-400 hover:text-slate-500 rounded-full"
            onClick={updateNotice}
          >
            <span className="sr-only">Edit</span>
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
            </svg>
          </button>
          <button
            type="button"
            className="text-slate-400 hover:text-slate-500 rounded-full"
          >
            <span className="sr-only">Download</span>
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M16 20c.3 0 .5-.1.7-.3l5.7-5.7-1.4-1.4-4 4V8h-2v8.6l-4-4L9.6 14l5.7 5.7c.2.2.4.3.7.3zM9 22h14v2H9z" />
            </svg>
          </button>
          <button
            type="button"
            className="text-rose-500 hover:text-rose-600 rounded-full"
            onClick={() => deleteNotice(id)}
          >
            <span className="sr-only">Delete</span>
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
              <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default NoticesTableItem;
