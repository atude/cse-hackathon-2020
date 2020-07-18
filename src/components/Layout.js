import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  padding: 2em;
  max-width: 1200px;
  margin: auto;

  .paper {
    padding: 1em;
  }
`;

const Layout = (props) => {
  return (
    <StyledLayout>
      {props.children}
    </StyledLayout>
  );
}

export default Layout;
