import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  radius: 18px;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: justify;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 9px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 18px;
  color: #000000;
`;

export const labelError = styled.label`
  font-size: 18px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #000000;
  }
`;

export const Image = styled.img`
  width: 309.6px;
  height: 94.81px;
  top: 10.59px;
  left: -7.86px;
`;

export const TextInput = styled.text`
  font-family: Nunito;
  font-size: 18px;
  color: #262626;
  font-weight: 700;
`;