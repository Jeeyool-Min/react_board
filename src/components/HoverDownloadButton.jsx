import React from 'react';

function HoverDownloadButton() {
  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 bg-stone-800 group-hover:opacity-40" />
      <div className="absolute m-2 rounded top-0 right-0 w-10 h-10 bg-white opacity-0 group-hover:opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36"
          width="36"
          viewBox="-9 -9 60 60"
        >
          <title>download file</title>
          <g fill="black" className="nc-icon-wrapper">
            <path
              data-color="color-2"
              d="M16,27a1,1,0,0,0-.809,1.588l8,11a1,1,0,0,0,1.618,0l8-11A1,1,0,0,0,32,27H26V4a2,2,0,0,0-4,0V27Z"
            />
            <path
              d="M38.953,21.7A1,1,0,0,0,38,21H30a1,1,0,0,0,0,2h7.269l6.363,20H4.368l6.363-20H18a1,1,0,0,0,0-2H10a1,1,0,0,0-.953.7l-7,22A1,1,0,0,0,3,45H45a1,1,0,0,0,.953-1.3Z"
              fill="black"
            />
          </g>
        </svg>
      </div>
    </>
  );
}

export default HoverDownloadButton;
