import styled from "styled-components";
import bg from "../images/bg_search.png"



const Wrapper = styled.section`
  /* Внутри файла DashboardFormPage.css */
  
    h4{
      color: #1c2b33;
    }
  .responses {
    color: #1c2b33,;
    margin-top: 2rem;
  }

  .response-card {
    color: black;
    background: #f4f4f4;
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .response-card h5 {
    margin-bottom: 0.5rem;
  }

  .response-card p {
    margin: 0.2rem 0;
  }

  background-image: url(${bg});
  background-size: cover;

  border-radius: var(--borderRadius);
  width: 100%;
  //background: var(--backgroundColor);
  padding: 3rem 2rem 4rem;
  align-items: center;
  box-shadow: var(--shadow-2);

  h3 {
    margin-top: 0;
    color: black;
    text-align: center;
  }

  .form {
    margin: 0;
    /* border-radius: 0;
    box-shadow: none; */
    //padding: 24px 48px;
    max-width: 90%;
    width: 100%;
  }

  .form-row {
    margin-bottom: 0;
  }

  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }

  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;

    button {
      height: 35px;
    }
  }

  .clear-btn {
    background: var(--grey-500);
  }

  .clear-btn:hover {
    background: var(--black);
  }

  @media (max-width: 600px) {
    .form {
      padding: 10px;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }

    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
