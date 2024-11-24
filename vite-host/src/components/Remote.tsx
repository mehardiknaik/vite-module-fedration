import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const RemoteComp = lazy(async () => import("remote/remote-button"));

const Remote = () => {
  return (
    <ErrorBoundary fallback={""}>
      <Suspense fallback={""}>
        <RemoteComp />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Remote;
