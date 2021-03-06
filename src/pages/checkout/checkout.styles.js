import styled from 'styled-components';

export const CheckoutPageCont = styled.div`
  width: 90%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutHeaderCont = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockCont = styled.div`
  text-transform: capitalize;
  width: 20%;

  &:last-child {
    width: 12%;
  }
`;

export const TotalCont = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarningCont = styled.div`
  color: red;
  text-align: center;
  margin-top: 40px;
`;
