import { lazy, Suspense } from "react";
import { Outlet } from "react-router";

const Event = lazy(async () =>
  // @ts-ignore
  import("remote/remote-event").catch(() => ({
    default: () => <></>,
  }))
);

const Layout = () => {
  return (
    <div>
      <header>Headrr</header>
      <Outlet />
      <Suspense fallback={""}>
        <Event />
      </Suspense>
    </div>
  );
};

export default Layout;
