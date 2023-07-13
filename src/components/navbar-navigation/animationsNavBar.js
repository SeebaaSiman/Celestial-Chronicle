import { keyframes } from "styled-components";
export const ShowInNavBar = keyframes`
  0% {
    opacity: 0;
    transform: translate3D(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3D(0, 0, 0);
  }
`
export const linksIn = keyframes`
0%{
opacity:0;
transform: translateX(-50%);
}
100%{
  opacity:1;
  transform: translateX(0%);
}
`
//Buttons Menu
export const showInTop = keyframes`
 0% {
   transform: rotate(-50deg) translateY(-40%) translateX(-2000%);

}
100% {
    transform: rotate(-50deg) translateY(-40%) translateX(40%);
   }
`;
export const showOutTop = keyframes`
0% {
  display: block;
  transform: rotate(-50deg) translateY(-40%) translateX(0%);
}
100% {
   transform: rotate(-50deg) translateY(-40%) translateX(200%);
   display: none;
  }
`;
export const showInMiddle = keyframes`
 0% {
   transform: rotate(-50deg) translateY(-50%) translateX(50%) scale(0);
}
100% {
  transform: rotate(-50deg) translateY(-50%) translateX(50%) scale(1);
   }
`;
export const showOutMiddle = keyframes`
0% {
  display: block;
  transform: rotate(-50deg) scaleY(1) translateY(-50%) translateX(50%) scale(1);
}
100% {
  transform: rotate(-50deg) scaleY(1) translateY(-50%) translateX(50%) scale(0);
   display: none;
  }
`;
export const showInBottom = keyframes`
 0% {
   transform: rotate(-50deg) translateY(-40%) translateX(200%);
}
100% {
  transform: rotate(-50deg) translateY(-60%) translateX(60%);
   }
`;
export const showOutBottom = keyframes`
0% {
  display: block;
  transform: rotate(-50deg) translateY(-40%) translateX(0%);
}
100% {
   transform: rotate(-50deg) translateY(-40%) translateX(-2000%);
   display: none;
  }
`;
export const showInLeft = keyframes`
 0% {
  transform: translate(-50%, 50%) rotate(0deg);
  opacity:0
}
100% {
  transform: translate(-50%, -50%) rotate(-45deg);
  opacity:1
   }
`;
export const showOutLeft = keyframes`
0% {
  transform: translate(-50%, -50%) rotate(-45deg);
  opacity:1
}
100% {
  transform: translate(-50%, -50%) rotate(0deg);
   opacity:0
  }
`;
export const showInRight = keyframes`
 0% {
  transform: translate(-50%, 50%) rotate(0deg);
  opacity:0
}
100% {
  transform: translate(-50%, -50%) rotate(45deg);
  opacity:1
   }
`;
export const showOutRight = keyframes`
0% {
  transform: translate(-50%, -50%) rotate(45deg);
  opacity:1
}
100% {
  transform: translate(-50%, -50%) rotate(0deg);
   opacity:0
  }
`;

// BgMenu
export const bgInLat = keyframes`
 0% {
  width:20%;
  margin:8px;
  transform:  translateY(-100%);
 }
 50%{
 margin:8px;
 width:30%;
}
100% {
 margin:-1px;
    transform:  translateY(0%);
    width:40%;
   }
`;
export const bgOutLat = keyframes`
0% {
 opacity:1;
 margin:-1px;
 width:40%;
  transform:  translateY(0%);
}
99% {
 margin:3px;
 opacity:1;
   transform:  translateY(100%) ;
  }

  100%{
   margin:5px;
   width:20%;
   transform:  translateY(100%) ;
   opacity:0;
  }
`;
export const bgInMiddle = keyframes`
 0% {
  margin:8px;
   transform:  translateY(100%);
}
100% {
 margin:-1px;
    transform:  translateY(0%);
   }
`;
export const bgOutMiddle = keyframes`
0% {
 margin:-1px;
 opacity:1;
  transform:  translateY(0%);
}
99% {
 margin:3px;
 opacity:1;
   transform:  translateY(-100%) ;
  }

  100%{
   margin:5px;
   transform:  translateY(-100%) ;
   opacity:0;
  }
`;
