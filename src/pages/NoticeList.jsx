import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import DeleteButton from '../components/DeleteButton';
import PaginationNumeric from '../components/PaginationNumeric';
import DateSelect from '../components/DateSelect';
import FilterButton from '../components/DropdownFilter';
import InvoicesTable from '../components/InvoicesTable';

// import EditMenu from '../components/DropdownEditMenu';

function NoticeList() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleSelectedItems = (selectedItems_) => {
    setSelectedItems([...selectedItems]);
    console.log(selectedItems_);
  };
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
          <div className="sm:flex sm:justify-between sm:items-center mb-5">
            {/* Left: Title */}
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                List ✨
              </h1>
            </div>

            {/* Right: Actions */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* Search form */}
              <SearchForm placeholder="Search by invoice ID…" />
              {/* Create invoice button */}
              <button
                type="button"
                className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
              >
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Create Invoice</span>
              </button>
            </div>
          </div>

          {/* More actions */}
          <div className="sm:flex sm:justify-between sm:items-center mb-5">
            {/* Left side */}
            <div className="mb-4 sm:mb-0">
              <ul className="flex flex-wrap -m-1">
                <li className="m-1">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out"
                  >
                    All
                    {' '}
                    <span className="ml-1 text-indigo-200">67</span>
                  </button>
                </li>
                <li className="m-1">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out"
                  >
                    Paid
                    {' '}
                    <span className="ml-1 text-slate-400">14</span>
                  </button>
                </li>
                <li className="m-1">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out"
                  >
                    Due
                    {' '}
                    <span className="ml-1 text-slate-400">34</span>
                  </button>
                </li>
                <li className="m-1">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out"
                  >
                    Overdue
                    {' '}
                    <span className="ml-1 text-slate-400">19</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Right side */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* Delete button */}
              <DeleteButton selectedItems={selectedItems} />
              {/* Dropdown */}
              <DateSelect />
              {/* Filter button */}
              <FilterButton align="right" />
            </div>
          </div>

          {/* Table */}
          <InvoicesTable selectedItems={handleSelectedItems} />

          {/* Pagination */}
          <div className="mt-8">
            <PaginationNumeric />
          </div>
        </div>
      </main>

      {/* Content */}
      <hr className="my-6 border-t border-slate-200" />
    </article>
  );
}
export default NoticeList;
