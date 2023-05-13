import styled from "styled-components";

export const GoBack = styled.div`
    padding: 10px;
    font-size: 18px;

  a {
    text-decoration: none;
  }
`;

export const ContainerMovieDetails = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 1px solid white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);

    img{
      width: 15%;
      padding-top: 10px;
      padding-left: 5px;
    }
`;


export const ContainerDetails = styled.div`
    margin-left: 25px;
    margin-right: 10px;

    h1{
      font-size: 30px;
    }

    h3{
      font-size: 20px;
    }

`;

export const ContainerInformation = styled.div`

  a{
    font-size: 18px;
  }

  li:not(:last-child) {
     margin-bottom: 10px;{
  }


`;



