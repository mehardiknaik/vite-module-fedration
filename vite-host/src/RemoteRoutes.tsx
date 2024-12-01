import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router'


const Routes = lazy(
  async () =>
    // @ts-ignore
    import("remote/remote-routes").catch(() => ({
      default: () => <Navigate to="/" replace/>,
    }))
);


const RemoteRoutes = () => {
  return (
    <Suspense fallback="">
      <Routes />
    </Suspense>
  )
}

export default RemoteRoutes