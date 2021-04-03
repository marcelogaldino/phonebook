/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
   } 

   body {
       background: #010035;
       font-family: 'Raleway', sans-serif;
   }

   #root {
        max-width: 1440px;
        height: 100vh;
        margin: 0 auto;
        padding: 40px 82px;
   }

   .flip-container {
        perspective: 1000px;
}

.flip-container:hover .flipper{
    transform: rotateY(180deg);
}

.front, .back{
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    flex: 1;
    backface-visibility: hidden;
}

.back{
    transform: rotateY(180deg);
}
`
