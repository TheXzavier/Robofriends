import React from "react";

const Cards = ({name,email, id}) => {
return (
<div className='tc bg-light-green dib br3 pa3 grow bw2 shadow-5 ma3'>
<div>
 <img alt = 'robots' src={`https://robohash.org/${id}?size=200x200`}/>
</div>
<div>
 <h2>{name}</h2>
 <p>{email}</p>
</div>
</div>
);

}
export default Cards;

