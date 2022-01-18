import styled, { css } from "styled-components";


export default styled.button`
  background: ${({theme, Danger}) => Danger ? theme.colors.danger.main : theme.colors.primary.main };
  color: #fff;
  height: 52px;
  border: none;
  outline: none;
  padding: 0 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({theme}) => theme.colors.primary.light};
  }

  &:active {
    background: ${({theme}) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #CCCCCC;
    cursor: default;
  }

  ${({theme, Danger}) => Danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background:  ${theme.colors.danger.dark};
    }
  `} 
  
`