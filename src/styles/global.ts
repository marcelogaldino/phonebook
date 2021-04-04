/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
   }

   html {
      font-size: 62.5%;
   }

   @media (max-width: 1421px) {
     html {
       font-size: 58%;
     }
   }

   @media (max-width: 720px) {
     html {
       font-size: 54%;
       padding: 20px 42px;
       margin-left: 1.5rem;
     }
   }

   @media (max-width: 380px) {
     html {
       font-size: 50%;
       padding: 10px 16px;
       margin-left: 6rem;
     }
   }

   body {
      background: #010035;
      font-family: 'Raleway', sans-serif;
   }

   #root {
      width: 100%;
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
