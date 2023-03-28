import React from 'react';

import { DownloadIcon } from './icons/Icons';

function DownloadButton() {
  return (
    <button
      type="button"
      className="rounded-full text-slate-400 hover:text-slate-500"
    >
      <span className="sr-only">Download</span>
      <DownloadIcon />
    </button>
  );
}

export default DownloadButton;
