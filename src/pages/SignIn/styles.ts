import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
    height: 100vh; /* abrangencia de 100% da tela*/
    display: flex;
    align-items: stretch;
    background:#fff;
`;

export const Content = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    img{
        max-width: 120px; max-height: 120px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
    }
    span{
        color: #4CAF50;
    }


`;
const appearFromLeft = keyframes`

    from{
        opacity: 0;
        transform: translateX(-50px)

        }
    to{
        opacity:1;
        transform: translateX(0)
    }

`;



export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromLeft} 1s;


    form {
        width: 340px;
      text-align: center;

    }


        h1 {
            margin-bottom: 24px;
            font-size: 25px;


        }
        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0, 2s;

            &:hover {
                color: ${shade(0.2, '#f4ede8')};
            }
        }



`;



