import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
     padding: 0;
     margin: 0;
     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  h1 {
    margin: 0;
  }
  
  p {
    margin: 0;
  }
`;

export const Loading = styled.h1`
    text-align: center;
    font-size: 50px;
    margin-top: 100px;
`

export default GlobalStyle;