import React from 'react';
import { Link } from 'react-router-dom';
// import EditMenu from '../components/DropdownEditMenu';

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
              List
            </Link>
          </li>
        </ul>
      </div>

      {/* Header */}
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
              List ✨
            </h1>
          </div>

          <div className="border-t border-slate-200">
            {/* Components */}
            <div className="space-y-8 mt-8">
              {/* Option 1 */}
              <div>
                <h2 className="text-2xl text-slate-800 font-bold mb-6">
                  Option1
                </h2>
                <div className="px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm">
                  Test1
                </div>
              </div>

              {/* Option 2 */}
              <div>
                <h2 className="text-2xl text-slate-800 font-bold mb-6">
                  Option2
                </h2>
                <div className="px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm">
                  Test2
                </div>
              </div>

              {/* Option 3 */}
              <div>
                <h2 className="text-2xl text-slate-800 font-bold mb-6">
                  Option3
                </h2>
                <div className="px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm">
                  Test3
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Content */}
      <hr className="my-6 border-t border-slate-200" />
    </article>
  );
}

export default NoticeDetail;
