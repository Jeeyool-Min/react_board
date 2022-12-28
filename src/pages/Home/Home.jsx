import React from 'react';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import Write from '../New/Write';

function Home() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 false">
      <Aside />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <div className="body p-8">
          <div className="grid gap-6 mb-8">
            <Write />
            <div className="min-w-0 rounded-lg shadow-xs border border-slate-200 dz overflow-hidden bg-white dark:bg-gray-800">
              <div className="p-4">
                <header className="flex justify-between mb-2">
                  <div className="flex">
                    <div className="w-12">
                      <img
                        className="rounded-full ub"
                        src="https://preview.cruip.com/mosaic/images/user-40-03.jpg"
                        min-width="100%"
                        height="auto"
                        alt="User 03"
                      />
                    </div>
                    <div className="ml-2">
                      <div>
                        <a className="text-sm gh text-slate-800" href="#0">
                          Dominik Lamakani
                        </a>
                      </div>
                      <div className="go text-sm text-slate-500">Yesterday at 10:48 AM</div>
                    </div>
                  </div>
                </header>
                <div className="text-sm text-slate-800 fb ii">
                  <p>
                    👋 It is more likely that people reading your blog will opt in with their email
                    addresses if you give them something highly relevant in return. Ditch that
                    too-general lead magnet and create `content upgrades` for your highest-traffic
                    articles. Thread 👇
                  </p>
                </div>
                <footer className="flex items-center mt-2">
                  <button type="button" className="flex items-center pr-2">
                    <img
                      src="https://www.svgrepo.com/show/414395/like.svg"
                      className="w-4 h-4"
                      alt="likes"
                    />
                    <div className="text-sm text-slate-500">4</div>
                  </button>
                  <button type="button" className="flex items-center pr-2">
                    <img
                      src="https://www.svgrepo.com/show/445658/comment-blank.svg"
                      className="w-4 h-4"
                      alt="comments"
                    />
                    <div className="text-sm text-slate-500">44</div>
                  </button>
                </footer>
              </div>
            </div>
            <div className="min-w-0 rounded-lg shadow-xs border border-slate-200 dz overflow-hidden bg-white dark:bg-gray-800">
              <div className="p-4">
                <header className="flex justify-between mb-2">
                  <div className="flex">
                    <div className="w-12">
                      <img
                        className="rounded-full ub"
                        src="https://preview.cruip.com/mosaic/images/user-40-06.jpg"
                        min-width="100%"
                        height="auto"
                        alt="User 03"
                      />
                    </div>
                    <div className="ml-2">
                      <div>
                        <a className="text-sm gh text-slate-800" href="#0">
                          Mark Lee
                        </a>
                      </div>
                      <div className="go text-sm text-slate-500">Yesterday at 10:48 AM</div>
                    </div>
                  </div>
                </header>
                <div className="text-sm text-slate-800 fb ii">
                  <p>Designing an Earth-positive future, together 🌿</p>
                  <div className="y !my-4">
                    <img
                      className="block ou"
                      src="https://preview.cruip.com/mosaic/images/feed-image-01.jpg"
                      width="300"
                      height="332"
                      alt="Feed 01"
                    />
                  </div>
                </div>
                <footer className="flex items-center mt-2">
                  <button type="button" className="flex items-center pr-2">
                    <img
                      src="https://www.svgrepo.com/show/414395/like.svg"
                      className="w-4 h-4"
                      alt="likes"
                    />
                    <div className="text-sm text-slate-500">4</div>
                  </button>
                  <button type="button" className="flex items-center pr-2">
                    <img
                      src="https://www.svgrepo.com/show/445658/comment-blank.svg"
                      className="w-4 h-4"
                      alt="comments"
                    />
                    <div className="text-sm text-slate-500">44</div>
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
