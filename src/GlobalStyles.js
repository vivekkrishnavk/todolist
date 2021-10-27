import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(120deg, #5f57d1, #c065c0);
    font-family: "Poppins", Sans-Serif;
    color: white;
  }
`;
 
export default GlobalStyle;