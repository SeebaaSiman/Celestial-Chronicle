import { keyframes, styled } from "styled-components";

const showInFullScreen = keyframes`
   0% {
      opacity: 0;
      transform: scale(12%);
      transform: translateX(-22%);

    }
    100% {
      opacity: 1;
      transform: scale(100%);
    }
  `;

export const FullScreenContainer = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-image: ${(props) => (props.imageUrl ? `url(${props.imageUrl})` : 'none')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center center;
  animation: ${showInFullScreen} 0.8s ease-in-out forwards;
  color:white;
  z-index: 100;
`;


