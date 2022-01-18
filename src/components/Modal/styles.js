import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

`

export const Dialog = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  max-width: 450px;

  h1 {
    color:${({theme, Danger}) => Danger && theme.colors.danger.main};
    margin-top: 8px;
    font-size: 22px;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 42px;

  .cancelButton {
    background: transparent;
    color: ${({theme}) => theme.colors.gray[200]};
    outline: none;
    border: none;
  }
`