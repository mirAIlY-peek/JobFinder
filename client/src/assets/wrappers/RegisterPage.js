import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .ab{
    margin: 3rem auto;
  }
  .black{
    color: black;
    margin: 0 20px 0 0;
  }
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    width: 200px;
  }

  .form {
    padding: 3rem 2.5rem;
    max-width: 400px;
    border-top: 5px solid #3392dc;
  }

  h3 {
    color: black;
    text-align: center;
  }

  p {
    color: #333333;

    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }

  .btn {
    margin-top: 1rem;
    /* background-color: ; */
  }

  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;
export default Wrapper;
