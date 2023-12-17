import React from 'react';
import snackImage from '../../../assets/meal.svg';

const Diary = () => {
  return (
    <>
      <p>Diary</p>
      <img
        src={`${snackImage}#icon-Breakfast-image`}
        alt="Snack Icon"
        width="32"
        height="32"
      />
    </>
  );
};

export default Diary;
