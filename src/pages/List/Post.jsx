import React from 'react';
import { Link } from 'react-router-dom';

function Post({ id, name }) {
  return (
    <>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link class="relative block" to={`/detail/${id}`}>
              {id}
            </Link>
          </div>
          {/* <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">Jean marc</p>
          </div> */}
        </div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">12/09/2020</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 rounded-full opacity-50"
          />
          <span className="relative">active</span>
        </span>
      </td>
    </>
  );
}

export default Post;
