import styled, { css } from 'styled-components';

const mediaDesktop = (...args) => css`
  @media (min-width: 768px) {
    ${css(...args)}
  }
`;

const Main = styled.div`
  ${mediaDesktop`
    display: flex;
    justify-content: center;
  `}
`;

const FormWrapper = styled.div`
  ${mediaDesktop`
    width: 280px;
    padding-right: 30px;
    margin-right: 30px;
    border-right: 1px solid #ccc;
  `}
`;

const OrdersWrapper = styled.div`
  padding-top: 1rem;
  ${mediaDesktop`
    padding-top: 0;
    flex-grow: 1;
    max-width: 600px;
  `}
`;

export {
  Main,
  FormWrapper,
  OrdersWrapper,
};
