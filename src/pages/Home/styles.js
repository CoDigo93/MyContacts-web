import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: white;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow:0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`

export const Header = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: ${({justifyContent}) => justifyContent};
  border-bottom: 2px solid  rgba(188,188,188, 0.2);
  padding-bottom: 24px;

  strong {
    font-size: 24px;
  }


  a {
    color: ${({theme}) => theme.colors.primary.main};
    text-decoration: none;
    border: 2px solid ${({theme}) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({theme}) => theme.colors.primary.main};
      color: #fff;
    }
  }
  
`

export const ListHeader = styled.header`
    margin-top: 16px;
    padding-bottom: 8px;
    

    button {
      background: transparent;
      color: ${({theme}) => theme.colors.primary.main};
      border: none;
      display: flex;
      align-items: center;
      
      strong {
        margin-right: 8px;
      }

      img {
        transform: ${({orderBy}) => orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: transform .2s ease-in;
      }
    }
    
  

`

export const Card = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 8px 16px;
  height: 96px;

  header {
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    

    small{
      background-color: ${({theme}) => theme.colors.primary.lighter};
      color: ${({theme}) => theme.colors.primary.main};
      text-transform: uppercase;
      margin-left: 8px;
      font-weight: bold;
      font-size: 12px;
      border-radius: 4px;
      padding: 4px;
    }
  }

  span {
    color: ${({theme}) => theme.colors.gray[200]};
    display: block;
    font-size: 14px;

  }

  .actions {
    display: flex;
    align-items: center;
    gap: 12px;
    button {
      background: transparent;
      border: none;
    }
  }

  & + & {
    margin-top: 16px;
  }
`

export const ErrorContainer = styled.div`
  display:flex;
  align-items: center;
  margin-top: 16px;
  gap: 24px;

  strong {
    color: ${({theme}) => theme.colors.danger.main};
    font-size: 22px;
    display: block;
    margin-bottom: 8px;
  }
  
`

export const EmptyContacts = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:8px;
  margin-top: 16px;

  p{
    text-align:center;
    color:${({theme}) => theme.colors.gray[200]}
    
  }

  strong {
    color: ${({theme}) => theme.colors.primary.main};
  }
`

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  word-break: break-word;
  margin-top: 16px;

  span {
    color:${({theme}) => theme.colors.gray[200]};
  }
`