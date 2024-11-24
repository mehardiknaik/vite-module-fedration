import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const RemoteComp = lazy(async () =>
  import("remote/remote-button").catch(() => ({
    default: () => <div>Failed to load remote component</div>,
  }))
);

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
