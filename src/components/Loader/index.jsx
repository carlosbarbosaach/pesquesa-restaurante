import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/lf20_GRXN8Q.json';

export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};
