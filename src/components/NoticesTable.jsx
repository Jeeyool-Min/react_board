import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoticeItem from './NoticesTableItem';

function NoticesTable({
  notices,
  page,
  setNotices,
  setPage,
  setTotalPages,
  selectedItems,
}) {
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(notices);
  }, [notices]); // notices

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(list.map((li) => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    selectedItems(isCheck);
  }, [isCheck]);

  return (
    <div className="relative rounded-sm border border-slate-200 bg-white shadow-lg">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">
          List <span className="font-medium text-slate-400"> </span>
        </h2>
      </header>
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            {/* Table header */}
            <thead className="border-t border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
              <tr>
                <th className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input
                        className="form-checkbox"
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </label>
                  </div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">ID</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Title</div>
                </th>
                <th className="whitespace-nowrap px-4 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Status</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Creator </div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Written Date</div>
                </th>
                <th className="whitespace-nowrap px-4 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-slate-200 text-sm">
              {list.map((notice) => (
                <NoticeItem
                  key={notice.id}
                  id={notice.id}
                  title={notice.title}
                  status={notice.status}
                  creator={notice.creator.email}
                  writtendate={notice.createdAt}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(notice.id)}
                  page={page}
                  setNotices={setNotices}
                  setTotalPages={setTotalPages}
                  setPage={setPage}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NoticesTable;
