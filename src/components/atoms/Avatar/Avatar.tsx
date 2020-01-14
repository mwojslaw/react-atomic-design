import styled from "styled-components";

export const Avatar = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  height: 100%;
  background-position: center;
  background-size: cover;
`;
