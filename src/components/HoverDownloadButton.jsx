import React from 'react';
import { DownloadIcon } from './common/icons';

function HoverDownloadButton() {
  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 bg-stone-800 group-hover:opacity-40" />
      <div className="absolute m-2 rounded top-0 right-0 w-10 h-10 bg-white opacity-0 group-hover:opacity-60">
        <DownloadIcon />
      </div>
    </>
  );
}

export default HoverDownloadButton;
