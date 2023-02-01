import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 8rem;

  > h1 {
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > input {
    width: auto;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    min-width: 15rem;
    text-align: end;
    align-items: flex-end;
    margin-right: .9rem;
    line-height: 2.4rem;

    a {
      font-size: 1.4rem;
      color: ${({theme}) => theme.COLORS.GRAY_100}
    }

    strong {
      font-size: 1.8rem;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;