import  { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const RemoteComp = lazy(
  async () =>
    // @ts-ignore
    import("remote/remote-button")
);

const Remote = () => {
  return (
    <ErrorBoundary fallback={''}>
      <Suspense fallback="loading...">
        <RemoteComp />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Remote;
