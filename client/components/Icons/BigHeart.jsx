import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import style from './Icon.scss';

const BigHeart = props => (
  <svg
    className={props.theme.big_star}
    width='29'
    height='24'
    strokeWidth='1'
    fill='transparent'
    viewBox='0 0 24 20'
    xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <path
        d='M12.2204462,6.73523319 C12.1365545,6.90041775 12.0637047,7.10799331 11.9999269,7.34869081
          C11.9361948,7.10799331 11.8632076,6.90041775 11.7793159,6.73523319 C10.5709724,4.35444956
          7.51174163,3.33400439 4.9463771,4.45560119 C2.38247872,5.57685784 1.28240188,8.4150135
          2.49069953,10.7956696 C3.69885972,13.1762406 11.9979109,20 11.9979109,20 C12.0018054,
          20 20.3009482,13.1762406 21.5090167,10.7956696 C22.7173602,8.4150135 21.6188411,5.57685784
          19.0532933,4.45560119 C16.4887077,3.33400439 13.428698,4.35444956 12.2204462,6.73523319 Z' />
    </g>
  </svg>
);

BigHeart.propTypes = {
  theme: PropTypes.object.isRequired,
};

BigHeart.defaultProps = {
};

export default themr('BigHeart', style)(BigHeart);
