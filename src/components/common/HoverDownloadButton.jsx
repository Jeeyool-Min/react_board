import React from 'react';

import DownloadIcon from './icons/DownloadIcon';

function HoverDownloadButton() {
  return (
    <>
      <div className="absolute inset-0 h-full w-full overflow-hidden bg-stone-800 opacity-0 group-hover:opacity-40" />
      <div className="absolute top-0 right-0 m-2 h-10 w-10 rounded bg-white opacity-0 group-hover:opacity-60">
        <DownloadIcon />
      </div>
    </>
  );
}

export default HoverDownloadButton;
