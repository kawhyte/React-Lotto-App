import React from "react";

const Searchbox = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input className='tc pa3 ba bg-light-grey' type="search" placeholder="find by ticket name " onChange={searchChange}/>
    </div>
  );
};

export default Searchbox;
