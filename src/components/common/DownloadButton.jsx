import React from 'react';
import { DownloadIcon } from './Icons';

function DownloadButton() {
  return (
    <button
      type="button"
      className="text-slate-400 hover:text-slate-500 rounded-full"
    >
      <span className="sr-only">Download</span>
      <DownloadIcon />
    </button>
  );
}

export default DownloadButton;
