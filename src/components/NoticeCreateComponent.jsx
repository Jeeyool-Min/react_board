import React from 'react';
import Tooltip from './Tooltip';

function NoticeCreateComponent() {
  return (
    <>
      {/* Post 3 */}
      <div className="bg-white shadow-md rounded border border-slate-200 p-5">
        {/* Header */}
        <header className="flex justify-between items-start space-x-3 mb-4">
          {/* User */}
          <div className="flex items-start space-x-3">
            <div>
              <div className="leading-tight">
                <a className="text-sm font-semibold text-slate-800" href="#0">
                  Add New Notice
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Body */}
        <div className="mb-3">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="tooltip"
              >
                Title
                <span className="text-rose-500">*</span>
              </label>
              <Tooltip className="ml-2" bg="dark" size="md">
                <div className="text-sm text-slate-200">
                  Input title for the new notice
                </div>
              </Tooltip>
            </div>
            <input
              id="tooltip"
              className="form-input w-full border-rose-300"
              type="text"
              placeholder="mandatory, tooltip message, red border in case of error"
            />
          </div>
          <div className="text-xs mt-1 text-rose-500">
            This field is required!
          </div>
        </div>
        <div className="mb-3">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="tooltip"
              >
                Content
              </label>
              <Tooltip className="ml-2" bg="dark" size="md">
                <div className="text-sm text-slate-200">
                  Input content for the new notice
                </div>
              </Tooltip>
            </div>
            <textarea
              id="feedback"
              className="form-textarea w-full px-2 py-1"
              rows="8"
              required=""
            />
          </div>
        </div>
        <div className="mb-4">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="tooltip"
              >
                Public/Private
              </label>
              <Tooltip className="ml-2" bg="dark" size="md">
                <div className="text-sm text-slate-200">
                  Input content for the new notice
                </div>
              </Tooltip>
            </div>
            <div className="flex flex-wrap items-center -m-3">
              <div className="m-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-buttons"
                    className="form-radio"
                    checked="true"
                    onChange={() => {}}
                  />
                  <span className="text-sm ml-2">Public</span>
                </label>
              </div>
              <div className="m-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-buttons"
                    className="form-radio"
                    onChange={() => {}}
                  />
                  <span className="text-sm ml-2">Private</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="tooltip"
              >
                Notification
              </label>
              <Tooltip className="ml-2" bg="dark" size="md">
                <div className="text-sm text-slate-200">
                  Input content for the new notice
                </div>
              </Tooltip>
            </div>
            <div className="flex items-center">
              <div className="form-switch">
                <input type="checkbox" id="switch-1" className="sr-only" />
                <label className="bg-slate-400" htmlFor="switch-1">
                  <span className="bg-white shadow-sm" aria-hidden="true" />
                  <span className="sr-only">Switch label</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">On</div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="flex items-center space-x-4">
          <div className="text-right w-full">
            <button
              type="submit"
              className="btn border-slate-200 hover:border-slate-300 text-slate-600 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              Save
            </button>
          </div>
        </footer>
        {/* Comments */}
      </div>
    </>
  );
}

export default NoticeCreateComponent;
