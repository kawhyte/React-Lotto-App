import React from "react";

const Searchbox = ({searchChange}) => {
  return (
   
<div className="center">
<form className="pa4 black-80">
  <div className="measure-narrow center">
    <label htmlFor="searchbox" className="f6 b db mb2">Filter Tickets</label>
    <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="new-search" placeholder="EX. Cash Multiplier" id="searchbox" aria-label="search-desc" onChange={searchChange} />
  </div>
</form>
</div>

      

  
  );
};

export default Searchbox;
