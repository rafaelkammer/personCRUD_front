import styled from "styled-components";

export const PersonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 25px auto 0;
  padding: 0 15px 15px;
  border-radius: 5px;
  background-color: var(--color-grey0);

  ul {
    margin-bottom: 50px;
  }

  li {
    border: 1px solid var(--color-primary-variant);
    height: 200px;
    margin-top: 25px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;

    div {
      img {
        border-radius: 5px;
        max-height: 160px;
        max-width: 160px;
      }
    }

    button {
      border-style: none;
      color: var(--color-primary-variant);
      background-color: transparent;
      margin-left: 20px;
    }

    button:hover {
      cursor: pointer;
    }
  }
`;
