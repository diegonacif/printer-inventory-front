import styled, { css, keyframes } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

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

export const Container = styled.div<ContainerProps>`
  background:  #fff;
  border-radius: 5px;/*   borda aredondada*/
    padding: 10px;
    width: 100%;
    border: 1px solid #bfc3c5;


    color: #666360  ;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }
    ${(props) => props.isErrored
    && css`

            border-color: #f44336;
            svg{
                color:#f44336
            }
        `}

    ${(props) => props.isFocused
    && css`
            border-color: #2d8631;
            svg{
                color: #2d8631;
            }


        `}

    ${(props) => props.isFilled
    && css`
            color: #2d8631  ;
            border-color: #2d8631;
            border-color: #2d8631;
            svg{
                color: #2d8631;
            }

        `}


    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #262726;
        padding-top:10px;

        &::placeholder {
            color: #bfc3c5;

        }
    }


    `;
export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin-right: 0px;



    }

    span {
        background:#f44336;
        color: #fff;

        &::before {
            border-color: #f44336 transparent;
        }
    }


`;
