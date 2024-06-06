import styled from "styled-components";
import bg from "../images/bg.png"

const Wrapper = styled.main`

    background-image: url(${bg});
    background-size:cover;

  nav {
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
    width: 150px;
  }

  .landing-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  .logo-container {
    display: flex;
    align-items: center;
  }


  .nav-links ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 20px;
  }

  .nav-links a {
    margin: 10px;
    text-decoration: none;
    color: #232323;
    font-weight: 600;
    font-size: 15px;
  }

  .nav-links a:hover {
    border-bottom: 2px solid #333;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  
  

  .btn-hero {
    display: inline-flex;
    align-items: center;
    background: transparent;
    border: none;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    padding: 8px 12px;
    font-size: 16px;
  }

  .btn-hero .icon {
    margin-right: 10px;
    transition: transform 0.3s ease;
  }

  .btn-hero:hover .icon {
    transform: translateX(5px);
  }


  h1 {
    color: #1c2b33;
    font-weight: 700;
    font-size:50px;

    span {
      color: var(--primary-500);
    }
  }

  p {
    color: var(--grey-600);
  }

  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }

    .main-img {
      display: block;
    }
  }
`;
export default Wrapper;
