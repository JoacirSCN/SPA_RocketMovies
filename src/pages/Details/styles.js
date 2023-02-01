import styled from "styled-components";

// Com o styled-components criamos um elemento html e estilizamos ele para ser utilizado pelo index.jsx
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
    "header"
    "content"
  ;

`;