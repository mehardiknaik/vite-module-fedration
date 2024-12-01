import { Navigate, Route, Routes as RoutesWrapper } from "react-router";

import About from "../../pages/About";
import Detail from "../../pages/Detail";

const Routes = () => {
  return (
    <RoutesWrapper>
      <Route path="" element={<About />} />
      <Route path="detail" element={<Detail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </RoutesWrapper>
  );
};

export default Routes;
