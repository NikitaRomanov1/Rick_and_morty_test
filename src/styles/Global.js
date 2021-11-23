import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box; 
}
body {
  font-family: sans-serif;
  font-size: 40px;
  width: 100%;
  min-height: 100vh;
}
`;

export default Global;
