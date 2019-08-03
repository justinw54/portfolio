import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Gibson-SemiBold';
        src: url('../static/fonts/Gibson-SemiBold-webfont.woff');
    }

    @font-face {
        font-family: 'Gibson-Regular';
        src: url('../static/fonts/Gibson-Regular-webfont.woff');
    }

    @font-face {
        font-family: 'Gibson-Italic';
        src: url('../static/fonts/Gibson-Italic-webfont.woff');
    }

    body, html {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyles