import styled from "styled-components";


export const Container = styled.header`

  margin-bottom: 24px;
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${({theme}) => theme.colors.primary.main};
    font-weight: bold;
    margin-bottom: 8px;

    img {
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
  }
`