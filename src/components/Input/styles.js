import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.GRAY_300};


  > input {
    height: 5.6rem;
    width: 100%;
    padding: 1.2rem;
    margin-inline: 6.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 0;
    border-radius: 1rem;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

`;
