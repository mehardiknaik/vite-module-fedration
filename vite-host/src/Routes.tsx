import { Route, Routes as RoutesWrapper } from "react-router";
import Home from "./pages/Home";
import RemoteRoutes from "./RemoteRoutes";
import Layout from "./pages/Layout";

const Routes = () => {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="remote/*" element={<RemoteRoutes />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </RoutesWrapper>
  );
};

export default Routes;
