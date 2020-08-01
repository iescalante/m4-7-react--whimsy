import React from 'react';
import styled from 'styled-components';

const Stat = ({number, text}) => {
  return(
    <Wrapper>
      <Numbr>{number}</Numbr> {text}
    </Wrapper>
  );  
};

const Wrapper = styled.div`
  color: grey;
  margin-right: 20px;
`;

const Numbr = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: black;
`;

export default Stat;