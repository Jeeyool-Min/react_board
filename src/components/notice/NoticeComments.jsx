import React from 'react';

import UserAvatar from '../../assets/user-40-02.jpg';
import UserImage02 from '../../assets/user-28-02.jpg';
import UserImage05 from '../../assets/user-28-05.jpg';

function NoticeComments() {
  return (
    <>
      <div>
        <div className="mb-3 flex items-start space-x-3">
          <img
            className="shrink-0 rounded-full"
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
            className="btn-sm whitespace-nowrap bg-indigo-500 text-white hover:bg-indigo-600"
          >
            Reply -&gt;
          </button>
        </div>
      </div>
      {/* Comments */}
      <div className="mt-4">
        <h3 className="mb-4 font-semibold text-slate-800">Comments</h3>
        <ul className="space-y-5">
          {/* Comment */}
          <li className="relative space-y-5 pl-9">
            {/* Comment wrapper */}
            <div className="flex items-start">
              {/* Comment upvote */}
              <div className="absolute top-0 left-0">
                <button
                  type="button"
                  className="flex w-6 flex-col items-center justify-center rounded-sm text-left text-xs font-semibold hover:text-indigo-500"
                >
                  <svg
                    className="my-1.5 inline-flex fill-slate-400"
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
                <div className="mb-2 grow space-y-2 text-sm text-slate-800">
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
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-['']">
                    <a className="mr-2 block" href="#0">
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
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-['']">
                    <a
                      className="font-medium text-slate-500 hover:text-slate-600"
                      href="#0"
                    >
                      Reply
                    </a>
                  </div>
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-['']">
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
              <li className="relative space-y-5 pl-9">
                {/* Comment wrapper */}
                <div className="flex items-start">
                  {/* Comment upvote */}
                  <div className="absolute top-0 left-0">
                    <button
                      type="button"
                      className="flex w-6 flex-col items-center justify-center rounded-sm text-left text-xs font-semibold hover:text-indigo-500"
                    >
                      <svg
                        className="my-1.5 inline-flex fill-slate-400"
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
                    <div className="mb-2 grow space-y-2 text-sm text-slate-800">
                      <p>
                        That's great advice,{' '}
                        <a
                          className="font-medium text-indigo-500 hover:text-indigo-600"
                          href="#0"
                        >
                          @ekuplu89
                        </a>{' '}
                        👏
                      </p>
                    </div>
                    {/* Comment footer */}
                    <div className="flex flex-wrap text-xs">
                      <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-['']">
                        <a className="mr-2 block" href="#0">
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
                      <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-['']">
                        <a
                          className="font-medium text-slate-500 hover:text-slate-600"
                          href="#0"
                        >
                          Reply
                        </a>
                      </div>
                      <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-['']">
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
