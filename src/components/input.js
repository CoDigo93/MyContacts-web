import styled, { css }  from 'styled-components'

export default styled.input`
    width: 100%;
    height: 52px;
    border-radius: 4px;
    border: 2px solid #fff;
    padding: 0 16px;
    outline: none;
    font-size: 16px;
    transition: all 0.2s ease-in;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    appearance: none;

    &:focus {
      border: 2px solid ${({theme}) => theme.colors.primary.main};
    }

    &::placeholder {
      color: ${({theme}) => theme.colors.gray[200]};
    }

    & + & {
      margin-top: 16px;
    }

    ${({theme, error}) => error && css`
      color: ${theme.colors.danger.main};
      
      &:focus {
        border: 2px solid ${theme.colors.danger.main}
      }
    ` }

  
`