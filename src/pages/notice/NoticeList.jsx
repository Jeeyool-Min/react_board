import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import SearchForm from '../../components/SearchForm';
import DeleteButton from '../../components/common/DeleteButton';
import PaginationNumeric from '../../components/pagination/PaginationNumeric';
import DateSelect from '../../components/DateSelect';
import FilterButton from '../../components/dropdown/DropdownFilter';
import NoticesTable from '../../components/notice/NoticesTable';

// import EditMenu from '../components/DropdownEditMenu';

function NoticeList() {
  const [searchParams] = useSearchParams(); // get Query String
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const handleSelectedItems = (selectedItems_) => {
    setSelectedItems([...selectedItems_]);
    // console.log(selectedItems_);
  };
  useEffect(() => {
    let pageParam = searchParams.get('page');
    pageParam = pageParam ? parseInt(pageParam, 10) : 0;
    setPage(pageParam + 1);
    fetch(`/api/notice/list?page=${pageParam}`)
      .then((response) => {
        if (!response.ok) {
          alert(JSON.stringify(response));
          alert("Notice doesn't exist");
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        setNotices(data.content);
        setLoading(false);
        setPage(data.number + 1);
        setTotalPages(data.totalPages);
        setLoading(false);
      })
      .catch((response) => console.log(response));
  }, [searchParams]); // if searchParams is missing here, even if url changes, it won't pull up new data

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
              List
            </Link>
          </li>
        </ul>
      </div>
      {/* Header */}
      <main>
        <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-5 sm:flex sm:items-center sm:justify-between">
            {/* Left: Title */}
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
                Notice List ✨
              </h1>
            </div>

            {/* Right: Actions */}
            <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
              {/* Search form */}
              <SearchForm placeholder="Search by notice ID…" />
              {/* Create invoice button */}
              <Link to="/notice/create">
                <button
                  type="button"
                  className="btn bg-indigo-500 text-white hover:bg-indigo-600"
                >
                  <svg
                    className="h-4 w-4 shrink-0 fill-current opacity-50"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="ml-2 hidden xs:block">Create Notice</span>
                </button>
              </Link>
            </div>
          </div>

          {/* More actions */}
          <div className="mb-5 sm:flex sm:items-center sm:justify-between">
            {/* Left side */}
            <div className="mb-4 sm:mb-0">
              <ul className="-m-1 flex flex-wrap">
                <li className="m-1">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-transparent bg-indigo-500 px-3 py-1 text-sm font-medium leading-5 text-white shadow-sm duration-150 ease-in-out"
                  >
                    All <span className="ml-1 text-indigo-200"> </span>
                  </button>
                </li>
                <li className="m-1">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300"
                  >
                    Public <span className="ml-1 text-slate-400"> </span>
                  </button>
                </li>
                <li className="m-1">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300"
                  >
                    Private <span className="ml-1 text-slate-400" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Right side */}
            <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
              {/* Delete button */}
              <DeleteButton selectedItems={selectedItems} />
              {/* Dropdown */}
              <DateSelect />
              {/* Filter button */}
              <FilterButton align="right" />
            </div>
          </div>

          {/* Table */}
          {loading && <div> loading... </div>}
          <NoticesTable
            notices={notices}
            page={page}
            selectedItems={handleSelectedItems}
            setNotices={setNotices}
            setTotalPages={setTotalPages}
            setPage={setPage}
          />

          {/* Pagination */}
          <div className="mt-8">
            <PaginationNumeric
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          </div>
        </div>
      </main>

      {/* Content */}
      <hr className="my-6 border-t border-slate-200" />
    </article>
  );
}
export default NoticeList;
