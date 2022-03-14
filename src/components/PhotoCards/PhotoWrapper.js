import styled from "styled-components";

const PhotoWrapper = styled.div`
  .hover {
    &:hover {
      opacity: 1;
      box-shadow: 0px 0px 10px black;
      transform: scale(1.1);
      position: relative;
      z-index: 4;
    }
    .btnHover {
      opacity: 0;
    }
    &:hover .btnHover {
      opacity: 1;
    }
  }
`;

export default PhotoWrapper;
