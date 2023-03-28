import React from 'react';

function PaginationClassic() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav
        className="mb-4 sm:order-1 sm:mb-0"
        role="navigation"
        aria-label="Navigation"
      >
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <a
              className="btn cursor-not-allowed border-slate-200 bg-white text-slate-300"
              href="#0"
              disabled
            >
              &lt;- Previous
            </a>
          </li>
          <li className="ml-3 first:ml-0">
            <a
              className="btn border-slate-200 bg-white text-indigo-500 hover:border-slate-300"
              href="#0"
            >
              Next -&gt;
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center text-sm text-slate-500 sm:text-left">
        Showing <span className="font-medium text-slate-600">1</span> to{' '}
        <span className="font-medium text-slate-600">10</span> of{' '}
        <span className="font-medium text-slate-600">467</span> results
      </div>
    </div>
  );
}

export default PaginationClassic;
