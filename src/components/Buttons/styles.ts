import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: #4CAF50;
    height: 50px;
    border-radius: 5px;/*  borda arredondada*/
    border: 0;
    padding: 0 16px;
    color: #fff;
    width: 100%;
    font-weight: 500;
    margin-top: 35px;
    transition: background-color 0, 2s;
    outline: none !important;
    box-shadow: 4px 9px 17px #888888;

    &:hover {
        background: ${shade(0.3, '#4CAF50')}; /* escurecer 20% a cor do botão*/
    }
`;
