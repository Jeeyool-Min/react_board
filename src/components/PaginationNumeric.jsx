import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PAGES_SEEN } from '../utils/constants';

/* first, last, page, numOfNotices, totalPages, totalNotices */
function PaginationNumeric({ page, totalPages }) {
  const navigate = useNavigate();
  const [minPage, setMinPage] = useState(page - (page % PAGES_SEEN) + 1);
  const [maxPage, setMaxPage] = useState(1);
  const activatedBtnCSS =
    'hover:bg-indigo-500 text-slate-600 hover:text-white shadow-sm';
  const nonActivatedBtnCSS = 'text-slate-300';
  const pageNumbers = [...Array(maxPage + 1).keys()].slice(minPage);
  const curPageCSS = 'text-indigo-500';
  const nonCurPageCSS = 'hover:bg-indigo-500 text-slate-600 hover:text-white';

  useEffect(() => {
    const maxPageNo =
      totalPages < page + (5 - (page % 5)) // 11 of 13 --> 5
        ? page
        : page + (PAGES_SEEN - (page % PAGES_SEEN)); // 13
    setMaxPage(maxPageNo);

    const minPageNo =
      page % PAGES_SEEN
        ? page - (page % PAGES_SEEN) + 1
        : page - (PAGES_SEEN - 1);
    setMinPage(minPageNo);
  }, [page, totalPages]);

  const nextPageHandler = () => {
    if (maxPage !== totalPages) {
      navigate(`?page=${maxPage}`);
    } else {
      alert('no next page');
    }
  };
  const prevPageHandler = () => {
    if (minPage !== 1) {
      navigate(`?page=${minPage - 2}`);
    } else {
      alert('no previous page');
    }
  };

  return (
    <div className="flex justify-center">
      <nav className="flex" role="navigation" aria-label="Navigation">
        <div className="mr-2">
          <span
            className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 ${
              minPage === 1 ? nonActivatedBtnCSS : activatedBtnCSS
            }`}
          >
            <span className="sr-only">Previous</span>
            <wbr />
            <button type="button" onClick={prevPageHandler}>
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
              </svg>
            </button>
          </span>
        </div>
        <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">
          {pageNumbers.map((pgNo) => (
            <li key={pgNo}>
              <Link
                className={`inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white border border-slate-200 ${
                  pgNo === page ? curPageCSS : nonCurPageCSS
                }`}
                to={`?page=${pgNo - 1}`}
              >
                {pgNo}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-2">
          <span
            className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 ${
              totalPages === maxPage ? nonActivatedBtnCSS : activatedBtnCSS
            }`}
          >
            <span className="sr-only">Next</span>
            <wbr />
            <button type="button" onClick={nextPageHandler}>
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
              </svg>
            </button>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default PaginationNumeric;
