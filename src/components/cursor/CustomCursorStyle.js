import styled from "styled-components";
export const CursorWrapper = styled.div`
  &.idle {
    display: none;
  }
`;
export const SecondaryCursor = styled.div`
  z-index: 1000;
  border-radius: 50%;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  background: white;
  mix-blend-mode: difference;
  border: 3px solid transparent;
  transition: width 0.25s ease-in-out, height 0.25s ease-in-out;
  transform-origin: center;
  &.small {
    /* width: calc(2.2em + 1.8vw); */
    width: 1.8rem;
    height: 1.8rem;
  }
  &.medium {
    width: 6rem;
    height: 6rem;
  }
  &.regular {
    width: 12rem;
    height: 12rem;
  }
  &.xs {
    width: 0.4rem;
    height: 0.4rem;
  }
  /* @media screen {
display:none;
  } */
`;
