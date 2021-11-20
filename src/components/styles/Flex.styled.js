import styled from 'styled-components'

// use this when you want to aligns something side by side
export const Flex = styled.div`
  display: flex;
  align-items: center;

  //any direct div or direct URL, set flex to 1; this will put everything side by side as opposed to stacked
  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column; //no longer displays the child components side by side
    text-align: center; //in mobile all the text is center
  }
`
