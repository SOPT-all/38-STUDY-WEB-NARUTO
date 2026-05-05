import { Global, css } from '@emotion/react'
import PretendardVariable from '../assets/fonts/PretendardVariable.ttf'

const baseStyle = css `
    @font-face {
        font-family: 'Pretendard';
        src: url(${PretendardVariable}) format('truetype');
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
        
    body {
        font-family: 'Pretendard', sans-serif;
    }
    
    ul, li {
        list-style: none;
    }

`
const GlobalStyles = () => <Global styles={baseStyle} />;
export default GlobalStyles;