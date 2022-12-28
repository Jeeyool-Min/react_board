import React from 'react';

function Board() {
  return (
    <div className="bg-white shadow-md rounded border border-slate-200 dz">
      <div className="flex items-center fl ii">
        <img
          className="rounded-full ub"
          src="./images/user-40-02.jpg"
          width="40"
          height="40"
          alt="User 02"
        />
        <div className="uw">
          <label htmlFor="status-input" className="d">
            What's happening, Mark?
          </label>
          <input
            id="status-input"
            className="s ou hi cp ki xq bu"
            type="text"
            placeholder="What's happening, Mark?"
          />
        </div>
      </div>
      <div className="flex fe items-center">
        <div className="uw flex f_">
          <button className="inline-flex items-center text-sm gp g_ xp" type="button">
            <svg className="oo sl da mr-2" xmlns="http://www.w3.org/2000/svg" />
            <span>Media</span>
          </button>
          <button className="inline-flex items-center text-sm gp g_ xp" type="button">
            <svg className="oo sl da mr-2" xmlns="http://www.w3.org/2000/svg" />
            <span>GIF</span>
          </button>
          <button className="inline-flex items-center text-sm gp g_ xp" type="button">
            <svg className="oo sl da mr-2" xmlns="http://www.w3.org/2000/svg" />
            <span>Emoji</span>
          </button>
        </div>
        <div>
          <button type="submit" className="r ho xi ye lm">
            Send -&gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;
