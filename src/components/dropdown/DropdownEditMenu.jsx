import React, { useState, useRef, useEffect } from 'react';

import Transition from '../../utils/Transition';

function DropdownEditMenu({ children, align, ...rest }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      ) {
        return;
      }
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div {...rest}>
      <button
        type="button"
        ref={trigger}
        className={`rounded-full bg-white text-slate-400 hover:text-slate-500 ${
          dropdownOpen && 'bg-slate-100 text-slate-500'
        }`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Menu</span>
        <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="2" />
          <circle cx="10" cy="16" r="2" />
          <circle cx="22" cy="16" r="2" />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className={`absolute top-full z-10 mt-1 min-w-36 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <ul
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          {children}
        </ul>
      </Transition>
    </div>
  );
}

export default DropdownEditMenu;
