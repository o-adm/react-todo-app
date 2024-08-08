import styled from "styled-components";

const ButtonStyle = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 1.5rem;
  font-size: 1.5rem;
  clip-path: circle();
  background-color: #fff;
  color: orangered;
  border: none;
`;

export default function Button({ children, onClick }) {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
}
