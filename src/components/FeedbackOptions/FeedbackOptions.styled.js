import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 15px;
margin-top: 30px;
justify-content: center;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 5px 15px;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #7e6a94;
    color: #fff;

    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.75);

    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);

    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
  }
`;