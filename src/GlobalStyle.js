import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap');

html{
    box-sizing: border-box;
 
}
*,*::before,*::after{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Montserrat', sans-serif;

    
}
a, button{
    font-family: 'Montserrat', sans-serif;
}


`