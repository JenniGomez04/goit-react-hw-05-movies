import styled from "styled-components";

export const ContainerMovies = styled.div`

    padding-top: 20px;
    padding-left: 15px;

    h2{
      font-family: 'Lato', 'Poppins',sans-serif;
      text-align: center;
    }

    form {
      margin-top: 20px;
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input{
      width: 30%;
      height: 30px;
      font-size: 17px;
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

      &:hover{
        background-color: #551aa5;
      }
    }

`;
