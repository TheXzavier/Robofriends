import React from 'react';

const SearchBox = ({searchChange}) => {
return ( 
   <div>
    <input 
    className = 'pa3 ba b--green bg-lightest-blue ma2 br3 tc'
    type='search' 
    placeholder = 'Enter robots here'
    onChange={searchChange}

     />
    </div>
);

}
export default SearchBox;