import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';

function New() {
  const [trailName, setTrailName] = useState('');
  const [trailStatus, setTrailStatus] = useState('');
  const [isTrailTree, setTrailTree] = useState(null);
  const [trailDifficulty, setTrailDifficulty] = useState('');

  const onNameHandler = (e) => {
    setTrailName(e.currentTarget.value);
  };
  const onStatusHandler = (e) => {
    setTrailStatus(e.currentTarget.value);
  };
  const onTreeHandler = (e) => {
    setTrailTree(e.currentTarget.value);
  };
  const onDifficultyHandler = (e) => {
    setTrailDifficulty(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        trail_name: trailName,
        trail_status: trailStatus,
        is_tree: isTrailTree,
        trail_difficulty: trailDifficulty,
      }),
    }).then((res) => res.json());
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 false">
      <Aside />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <form className="body p-8" onSubmit={handleSubmit}>
          <div className="relative py-2">
            <label className="text-gray-700" htmlFor="name-with-label">
              Name
            </label>
            <input
              onChange={onNameHandler}
              type="text"
              id="name-with-label"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="name"
              placeholder="Trail name"
            />
          </div>
          <div className="relative py-2">
            <label className="text-gray-700" htmlFor="status">
              Status
              <select
                id="status"
                onChange={onStatusHandler}
                className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                name="animals"
              >
                {' '}
                <option value="">Select an option</option>
                <option value="closed">closed</option>
                <option value="open">open</option>
              </select>
            </label>
          </div>
          <div className="relative py-2">
            <label className="text-gray-700" htmlFor="isTree">
              Is tree
              <select
                id="isTree"
                onChange={onTreeHandler}
                className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                name="animals"
              >
                <option value="">Select an option</option>
                <option value>true</option>
                <option value={false}>false</option>
              </select>
            </label>
          </div>
          <div className="relative py-2">
            <label className="text-gray-700" htmlFor="difficulty">
              Difficulty
              <select
                id="difficulty"
                onChange={onDifficultyHandler}
                className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                name="animals"
              >
                <option value="">Select an option</option>
                <option value="beginner">beginner</option>
                <option value="intermediate">intermediate</option>
                <option value="advanced">advanced</option>
                <option value="expert">expert</option>
              </select>
            </label>
          </div>
          <div className="relative py-2">
            <label className="text-gray-700" htmlFor="comment">
              <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="comment"
                rows="5"
                cols="40"
              />
            </label>
          </div>
          <button
            type="submit"
            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default New;
