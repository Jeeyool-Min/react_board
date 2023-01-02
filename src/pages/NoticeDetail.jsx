import React from 'react';
import Header from '../components/Header';
import FeedLeftContent from '../components/feed/FeedLeftContent';
import FeedRightContent from '../components/feed/FeedRightContent';
import NoticeDetailComponent from '../components/NoticeDetailComponent';

function NoticeDetail() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-0 w-full max-w-9xl mx-auto">
            <div className="xl:flex">
              {/* Left + Middle content */}
              <div className="md:flex flex-1">
                {/* Left content */}
                <FeedLeftContent />

                {/* Middle content */}
                <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                  <div className="md:py-8">
                    {/* Forum entry */}
                    <NoticeDetailComponent />
                  </div>
                </div>
              </div>

              {/* Right content */}
              <FeedRightContent />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NoticeDetail;
