import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import beeAnimation from '../../assets/lotties/bee-animation.json'


const Loader = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.fill ? '100vh': '180px'};
  width: 100%;
`

const LocalLoader = ({ fill }) => {
  const defaultOptions = {
    animationData: beeAnimation,
  };

return (
 <Loader fill={fill}>
    <Lottie 
      options={defaultOptions}
      height={fill ? 100 : 84}
      width={fill ? 100 : 84}
    />
  </Loader>
);
}

export default LocalLoader
