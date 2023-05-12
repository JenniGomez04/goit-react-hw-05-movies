import styled from "styled-components";

export const ContainerMovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ContainerG = styled.div`
    display: flex;
    border-bottom: 1px solid white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);

`;

//Contenedor de GoBack y imagen de pelicula
export const ContainerOne = styled.div`
    flex-basis: 18%;
    padding-top: 10px;
    padding-bottom: 5px;

  img{
    position: relative;
    padding-top: 10px;
    width: 90%;
    padding-left: 5px;
  }

  a{
   // position: absolute;
    text-decoration: none;
    font-size: 18px;
  }

`;

export const ContainerTwo = styled.div`
    flex-basis: 98%;
    padding-top: 40px;

    h2{
      font-size: 24px;
    }

    h3{
      font-size: 18px;
    }

    ul{
      display: flex;
      list-style: none;
      padding: 0;
    }

    li:not(:last-child) {
      margin-right: 10px;{
    }
`;

export const ContainerGenres= styled.div`

    h2{
      font-size: 18px;
    }

`;


export const ContainerInformation = styled.div`

    padding-bottom: 10px;

  h2{
    font-size: 18px;
  }

`;



