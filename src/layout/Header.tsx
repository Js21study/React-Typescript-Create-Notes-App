import React from 'react';

import { BiHomeAlt2 } from 'react-icons/bi';
import { BiArchive } from 'react-icons/bi';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="bg-slate-200 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="logo" to="/">
          Create Notes App
        </Link>

        <div className="flex flex-wrap items-center justify-between">
          <Link className="flex flex-col items-center justify-between text-blue-700 pr-2" to="/">
            <BiHomeAlt2 /> <div>Home</div>
          </Link>

          <Link className="flex flex-col items-center justify-between text-blue-700" to="/archive">
            <BiArchive /> Archive
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;
