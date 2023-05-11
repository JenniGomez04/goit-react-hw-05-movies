import styled from "styled-components";

export const ContainerInput = styled.div`
    padding-top: 30px;
    padding-left: 15px;


    input{
      width: 30%;
      height: 30px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #cacdd1;
    }

    &::placeholder {
      font-size: 16px;
    }

    button{
      width: 60px;
      height: 30px;
      background-color: #11b6dd;
      color: white;
      border: 0;
      border-radius: 4px;
      cursor: pointer;
      margin-left:5px;

    }

    li{
      font-size: 17px;
    }

`;
