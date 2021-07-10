
import { createGlobalStyle} from 'styled-components'


export default createGlobalStyle`

:root{
    --background:#F0F2F5;
    --green:#4CAF50;    
   --blue-light:#6933FF;
    --text-title: #363F5F;
    --text-body:#969CB3;
  
  
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body{

}
h1, h2, h3, h4,h5,h6, strong{
    font-weight:500;
    color: var(--text-title)
}

`