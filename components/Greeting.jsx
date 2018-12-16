import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Greeting = () => (
  <Wrapper>
    Hi :3
  </Wrapper>
);

export default Greeting;
