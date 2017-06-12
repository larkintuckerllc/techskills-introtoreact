import React from 'react';
// import React, { PropTypes } from 'react';

/*
const Counter = ({ increment, value }) => (
  <div>
    <div>{value}</div>
    <button
      onClick={increment}
    >+</button>
  </div>
);
*/
const Counter = () => (
  <div>
    <div>0</div>
    <button>+</button>
  </div>
);
/*
Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
*/
export default Counter;
