import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const RemoteSnow = lazy(
  async () =>
    // @ts-ignore
    import("remote/remote-snow").catch(() => ({
      default: () => <div>Failed to load remote component</div>,
    }))
);
const RemotePop = lazy(
  async () =>
    // @ts-ignore
    import("remote/remote-popevent").catch(() => ({
      default: () => <div>Failed to load remote component</div>,
    }))
);

const Remote = () => {
  return (
    <ErrorBoundary fallback={""}>
      <Suspense fallback={""}>
        <RemoteSnow />
        <RemotePop/>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Remote;
