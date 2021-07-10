
import styled from 'styled-components'



export const Container = styled.div`

 height: 100vh; /* abrangencia de 100% da tela*/
    display: flex;
    align-items: stretch;
    background:#fff;


`
export const Content = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

     width: 100%;
    img{
        max-width: 100px; max-height: 100px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
    }
    .className.input{
        height: 100px
    }

`
