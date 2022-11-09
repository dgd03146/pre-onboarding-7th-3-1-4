import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  margin: 0 auto;

  min-height: 100vh;
`;
