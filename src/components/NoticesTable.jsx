import React, { useState, useEffect } from 'react';
import Notices from './NoticesTableItem';

function NoticesTable({ selectedItems }) {
  const notices = [
    {
      id: '0',
      title: 'Sunday Running',
      status: 'Public',
      creator: 'Min Young Choe',
      writtendate: '01/01/2023',
    },
    {
      id: '1',
      title: 'Woman Running',
      status: 'Private',
      creator: 'Jeeyul Min',
      writtendate: '02/01/2023',
    },
    {
      id: '2',
      title: 'Man Running',
      status: 'Paid',
      creator: 'Soo Kim',
      writtendate: '03/01/2023',
    },
    {
      id: '3',
      title: 'Saturday Running',
      status: 'Public',
      creator: 'Jay Jang',
      writtendate: '04/01/2023',
    },
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(notices);
  }, []);

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
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">
          List
          {' '}
          <span className="text-slate-400 font-medium"> </span>
        </h2>
      </header>
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
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
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">ID</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Title</div>
                </th>
                <th className="px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Status</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Creator </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Written Date</div>
                </th>
                <th className="px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {list.map((notice) => (
                <Notices
                  key={notice.id}
                  id={notice.id}
                  notice={notice.id}
                  title={notice.title}
                  status={notice.status}
                  creator={notice.creator}
                  writtendate={notice.writtendate}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(notice.id)}
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
