import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container vh-100 flex justify-center items-center">
      <h1>
        Page is not found. Please, go to <Link to="/">Home</Link> page!{' '}
      </h1>
    </div>
  );
};

export default NotFound;
