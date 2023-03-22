import React from 'react';
import UserAvatar from '../assets/user-40-02.jpg';
import UserImage02 from '../assets/user-28-02.jpg';
import UserImage05 from '../assets/user-28-05.jpg';

function NoticeComments() {
  return (
    <>
      <div>
        <div className="flex items-start space-x-3 mb-3">
          <img
            className="rounded-full shrink-0"
            src={UserAvatar}
            width="40"
            height="40"
            alt="User 02"
          />
          <div className="grow">
            <label htmlFor="comment" className="sr-only">
              Write a comment…
            </label>
            <textarea
              id="comment"
              className="form-textarea w-full focus:border-slate-300"
              rows="4"
              placeholder="Write a comment…"
              defaultValue=""
            />
          </div>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap"
          >
            Reply -&gt;
          </button>
        </div>
      </div>
      {/* Comments */}
      <div className="mt-4">
        <h3 className="font-semibold text-slate-800 mb-4">Comments</h3>
        <ul className="space-y-5">
          {/* Comment */}
          <li className="relative pl-9 space-y-5">
            {/* Comment wrapper */}
            <div className="flex items-start">
              {/* Comment upvote */}
              <div className="absolute top-0 left-0">
                <button
                  type="button"
                  className="text-xs font-semibold text-left w-6 rounded-sm flex flex-col justify-center items-center hover:text-indigo-500"
                >
                  <svg
                    className="inline-flex fill-slate-400 mt-1.5 mb-1.5"
                    width="12"
                    height="6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m0 6 6-6 6 6z" />
                  </svg>
                  <div>44</div>
                </button>
              </div>
              {/* Comment content */}
              <div>
                {/* Comment text */}
                <div className="grow text-sm text-slate-800 space-y-2 mb-2">
                  <p>
                    We've also had the same question to be honest. And for
                    Appy.com launch we decided to go with Twitter as a primary
                    medium and then Product Hunt as the other one. And I have to
                    say that it led to some great results as Twitter allows you
                    to be super active and engage in many conversations.
                  </p>
                  <p>
                    Also, users are there and everything is super active. So
                    that will be my advice - invest time in Twitter
                  </p>
                </div>
                {/* Comment footer */}
                <div className="flex flex-wrap text-xs">
                  <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                    <a className="block mr-2" href="#0">
                      <img
                        className="rounded-full"
                        src={UserImage02}
                        width="24"
                        height="24"
                        alt="User 02"
                      />
                    </a>
                    <a
                      className="font-medium text-indigo-500 hover:text-indigo-600"
                      href="#0"
                    >
                      ekuplu89
                    </a>
                  </div>
                  <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                    <a
                      className="font-medium text-slate-500 hover:text-slate-600"
                      href="#0"
                    >
                      Reply
                    </a>
                  </div>
                  <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                    <a
                      className="font-medium text-slate-500 hover:text-slate-600"
                      href="#0"
                    >
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Nested comments */}
            <ul className="space-y-5">
              {/* Comment */}
              <li className="relative pl-9 space-y-5">
                {/* Comment wrapper */}
                <div className="flex items-start">
                  {/* Comment upvote */}
                  <div className="absolute top-0 left-0">
                    <button
                      type="button"
                      className="text-xs font-semibold text-left w-6 rounded-sm flex flex-col justify-center items-center hover:text-indigo-500"
                    >
                      <svg
                        className="inline-flex fill-slate-400 mt-1.5 mb-1.5"
                        width="12"
                        height="6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m0 6 6-6 6 6z" />
                      </svg>
                      <div>2</div>
                    </button>
                  </div>
                  {/* Comment content */}
                  <div>
                    {/* Comment text */}
                    <div className="grow text-sm text-slate-800 space-y-2 mb-2">
                      <p>
                        That's great advice,
                        {' '}
                        <a
                          className="font-medium text-indigo-500 hover:text-indigo-600"
                          href="#0"
                        >
                          @ekuplu89
                        </a>
                        {' '}
                        👏
                      </p>
                    </div>
                    {/* Comment footer */}
                    <div className="flex flex-wrap text-xs">
                      <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                        <a className="block mr-2" href="#0">
                          <img
                            className="rounded-full"
                            src={UserImage05}
                            width="24"
                            height="24"
                            alt="User 05"
                          />
                        </a>
                        <a
                          className="font-medium text-indigo-500 hover:text-indigo-600"
                          href="#0"
                        >
                          ellielong
                        </a>
                      </div>
                      <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                        <a
                          className="font-medium text-slate-500 hover:text-slate-600"
                          href="#0"
                        >
                          Reply
                        </a>
                      </div>
                      <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                        <a
                          className="font-medium text-slate-500 hover:text-slate-600"
                          href="#0"
                        >
                          Share
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NoticeComments;
