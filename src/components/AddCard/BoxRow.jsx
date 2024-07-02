import React from 'react';

const BoxRow = ({ title }) => {
    return (
      <div className="bg-white mb-2 w-64 h-32 rounded-lg shadow-lg ">
      <h2 className=" p-2">{title}</h2>

    </div>
    );
};

export default BoxRow;