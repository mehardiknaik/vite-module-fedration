import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const RemoteButton = lazy(
  async () =>
    // @ts-ignore
    import("remote/remote-button")
);
const RemoteSnow = lazy(
  async () =>
    // @ts-ignore
    import("remote/remote-snow")
);

const Remote = () => {
  return (
    <ErrorBoundary fallback={""}>
      <Suspense fallback={""}>
        <RemoteButton />
        <RemoteSnow />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Remote;
