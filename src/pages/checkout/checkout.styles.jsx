import styled from '@emotion/styled';

export const CheckoutStyles = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 3rem;
  }
`;
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  > div {
    text-transform: capitalize;
    width: 23%;

    :last-child {
      width: 8%;
    }
  }
`;
export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
export const Warning = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  color: red;
`;
