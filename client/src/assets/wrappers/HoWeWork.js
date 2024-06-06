import styled, { css, keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ;
  padding: 20px;
  text-align: center;

  ${props => props.show && css`
    animation: ${slideUp} 0.5s ease-out forwards;
  `};

  h1 {
    font-size: 34px;
    color: #333;
  }

  p {
    font-size: 24px;
    color: #666;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;

    span {
      background: #2196f3;
      padding: 10px 20px;
      margin: 5px;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #1769aa;
      }
    }
  }
`;

export default Wrapper;
