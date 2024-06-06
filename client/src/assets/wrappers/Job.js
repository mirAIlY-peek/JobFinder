import styled from 'styled-components';

const Wrapper = styled.article`
  background: #fff;
  border-radius: 8px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  color: #333;
  margin-bottom: 20px;
  .apply-btn{
    color: #1769aa;
    border: none;
    font-size: 16px;
    font-weight:700;
    background-color: white;
  }

  header {
    padding: 16px 24px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;

    .main-icon {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0056b3;
      color: white;
      border-radius: 50%;
      font-size: 20px;
      margin-right: 16px;
    }

    .info {
      color: #1c2b33;
      h5 {
        margin: 0;
        color: #333;
        font-size: 18px;
      }

      p {
        margin: 4px 0 0;
        color: #666;
        font-size: 14px;
      }
    }
  }

  .content {
    padding: 16px 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  footer {
    //display: flex;
    //justify-content: flex-end;
    //padding: 10px 24px;


    .edit-btn,
    .delete-btn {
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
    }

    .edit-btn {
      background-color: #4CAF50;
      color: white;
      margin-right: 8px;
    }

    .delete-btn {
      background-color: #f44336;
      color: white;
    }
  }
`;

export default Wrapper;
