import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle } from 'styled-components'
import { useDarkModeManager } from '../contexts/LocalStorage'
import styled from 'styled-components'
import { Text } from 'rebass'

export default function ThemeProvider({ children }) {
  const [darkMode] = useDarkModeManager()

  return <StyledComponentsThemeProvider theme={theme(darkMode)}>{children}</StyledComponentsThemeProvider>
}

const theme = (darkMode, color) => ({
  customColor: color,
  textColor: darkMode ? color : 'black',

  panelColor: darkMode ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0)',
  backgroundColor: darkMode ? '#FFFFFF' : '#FFFFFF',

  uniswapPink: darkMode ? '#black' : 'black',

  concreteGray: darkMode ? '#FFF' : '#FFF',
  inputBackground: darkMode ? '#FFF' : '#FFF',
  shadowColor: darkMode ? '#000' : '#000',
  mercuryGray: darkMode ? '#FFF' : '#FFF',

  text1: darkMode ? '#000000' : '#000000',
  text2: darkMode ? '#000000' : '#000000',
  text3: darkMode ? '#000000' : '#000000',
  text4: darkMode ? '#000000' : '#000000',
  text5: darkMode ? '#000000' : '#000000',

  // special case text types
  white: '#000',

  // backgrounds / greys
  bg1: darkMode ? '#FFFFFF' : '#FFFFFF',
  bg2: darkMode ? '#FFFFFF' : '#FFF',
  bg3: darkMode ? '#FFF' : '#FFF',
  bg4: darkMode ? '#FFF' : '#FFF',
  bg5: darkMode ? '#FFF' : '#FFF',
  bg6: darkMode ? '#000' : '#FFF',

  //specialty colors
  modalBG: darkMode ? 'rgba(255,255,255,.425)' : 'rgba(255,255,255,0.3)',
  advancedBG: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.6)',
  onlyLight: darkMode ? '#FFFFFF' : 'transparent',
  divider: darkMode ? 'rgba(43, 43, 43, 0.435)' : 'rgba(43, 43, 43, 0.035)',

  //primary colors
  primary1: darkMode ? '#fff' : '#fff',
  primary2: darkMode ? '#fff' : '#fff',
  primary3: darkMode ? '#fff' : '#fff',
  primary4: darkMode ? '#fff' : '#fff',
  primary5: darkMode ? '#fff' : '#fff',

  // color text
  primaryText1: darkMode ? 'rgba(0, 0, 0, 0.8)' : '#000',

  // secondary colors
  secondary1: darkMode ? '#FFF' : '#FFF',
  secondary2: darkMode ? '#FFF' : '#FFF',
  secondary3: darkMode ? '#FFF' : '#FFF',

  shadow1: darkMode ? '#000' : '#000',

  // other
  red1: '#FF6871',
  green1: '#27AE60',
  yellow1: '#FFE270',
  yellow2: '#F3841E',
  link: '#e52020',
  blue: '2f80ed',

  background: darkMode ? 'black' : `white`
})

const TextWrapper = styled(Text)`
  color: ${({ color, theme }) => theme[color]};
`

export const TYPE = {
  main(props) {
    return <TextWrapper fontWeight={500} fontSize={14} color={'text1'} {...props} />
  },

  body(props) {
    return <TextWrapper fontWeight={400} fontSize={14} color={'text1'} {...props} />
  },

  small(props) {
    return <TextWrapper fontWeight={500} fontSize={11} color={'text1'} {...props} />
  },

  header(props) {
    return <TextWrapper fontWeight={600} color={'text1'} {...props} />
  },

  largeHeader(props) {
    return <TextWrapper fontWeight={500} color={'text1'} fontSize={24} {...props} />
  },

  light(props) {
    return <TextWrapper fontWeight={400} color={'text3'} fontSize={14} {...props} />
  },

  pink(props) {
    return <TextWrapper fontWeight={props.faded ? 400 : 600} color={props.faded ? 'text1' : 'text1'} {...props} />
  }
}

export const Hover = styled.div`
  :hover {
    cursor: pointer;
  }
`

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;
  :hover {
    text-decoration: underline;
  }
  :focus {
    outline: none;
    text-decoration: underline;
  }
  :active {
    text-decoration: none;
  }
`

export const ThemedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  max-width: 100vw !important;
  height: 200vh;
  mix-blend-mode: color;
  background: transparent;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9999;

  transform: translateY(-110vh);
`

export const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;    
    background-color: ${({ theme }) => theme.bg6};
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: none
    }
  }


.three-line-legend {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: #20262E;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

.three-line-legend-dark {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: white;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

@media screen and (max-width: 800px) {
  .three-line-legend {
    display: none !important;
  }
}

.tv-lightweight-charts{
  width: 100% !important;


  & > * {
    width: 100% !important;
  }
}


  html {
    font-size: 1rem;
    font-variant: none;
    color: 'black';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    height: 100%;
  }
`
