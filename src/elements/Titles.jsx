import styled from 'styled-components'
import tw from 'tailwind.macro'
import { rotateAnimation } from '../styles/animations'
import triangle from '../images/triangle.svg'
import blackstar from '../images/Star.svg'
import styles from '../styles/style.css'

export const Title = styled.h1`
  ${tw`text-5xl lg:text-5xl text-white mb-8 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('4s')};
    left: -60px;
    top: 5px;
  }
  font-family: 'Cormorant Garamond';
  font-weight: 700;
  letter-spacing: 2px;
`

export const BigTitle = styled.h1`
  ${tw`text-white mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  font-size: 10vw;
  white-space: nowrap;
`

export const Subtitle = styled.p`
  ${tw`text-white mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  font-size: 4vw;
  font-family: 'Cormorant Garamond';
  font-weight: 700;
  letter-spacing: 1px;
`
