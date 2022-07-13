import { injectGlobal } from "@emotion/css";

injectGlobal`
:root {
  --background: #f0f2f5;
  --shape: "#FFFFFF";
  
  --red: #e53e4d;
  --blue: #5429cc;

  --blue-light: #6933ff;
  --text-title: #363f5f;
  --text-body: #969cb3;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


// font-size: 16px (Desktop)
html {
  @media (max-width: 1080px ) {
    font-size: 93.75% ; // Tablet 15px
  }

  @media (max-width: 720px ) {
    font-size: 87.5% ; // Mobile 14px
  }
}
// REM ==> 1rem = font-size da aplicação

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong {
  font-weight: 600;
}

button {
  cursor: pointer;
} 

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
