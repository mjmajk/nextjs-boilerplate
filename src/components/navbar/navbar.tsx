import Link from "next/link";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <Container>
      <Li>
        <Link href="/">Home</Link>
      </Li>
      <Li>
        <Link href="/todos">Todos</Link>
      </Li>
      <Li>
        <Link href="/about">About</Link>
      </Li>
    </Container>
  );
};

const Container = styled.ul`
  border: 1px solid black;
  padding: 1rem;
  text-align: center;
`;

const Li = styled.li`
  display: inline;
  padding: 1rem;
`;
