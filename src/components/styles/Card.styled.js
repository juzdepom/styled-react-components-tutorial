import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || 'row'}; //reverses which child div is displayed first

  img {
    width: 80%;
  }

  //every immediate div is also going to have flex
  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
      //in mobile, everything is going to be on top of each other
    flex-direction: column;
  }
`
