import React, { useContext } from 'react';

const Filter = ({ dispatch }) => {
  const handleShowAll = () => {
    dispatch({ type: 'SHOW_ALL' });
  };
  const handleShowComplete = () => {
    dispatch({ type: 'SHOW_COMPLETE' });
  };
  const handleShowIncomplete = () => {
    dispatch({ type: 'SHOW_INCOMPLETE' });
  };
  return (
    <>
      <button
        type="button"
        onClick={handleShowAll}
        className="btn btn-outline-primary"
      >
        Show All
      </button>
      <button
        type="button"
        onClick={handleShowComplete}
        className="btn btn-outline-primary"
      >
        Show Complete
      </button>
      <button
        type="button"
        onClick={handleShowIncomplete}
        className="btn btn-outline-primary"
      >
        Show Incomplete
      </button>
    </>
  );
};

export default Filter;
