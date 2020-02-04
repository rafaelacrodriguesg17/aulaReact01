import styled from 'styled-components';

export const Titulo = styled.h1`
    color: red;
    font-size: 35px;
    span{
        color: black;
        font-size: 20px;
    }
`;

export const SubTitulo = styled.h1`
    color: red;
    font-size: ${props => `${props.fontSize}px`};
`;