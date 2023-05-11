import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  width: 14%;
  margin-bottom: 3rem;
  text-align: center;

  img {
    margin-top: 20px;
    max-width: 80%;
    height: 200px;
    border-radius: 4px;
  }

  p {
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;
