import { FitList } from "./components/FitList.jsx";
import { Zall } from "./components/Zall.jsx"
import { Entertain } from "./components/Entertain.jsx";
import { Gallery } from "./components/Gallery.jsx"
import { Otsov} from "./components/Otsov.jsx";
import { Bron } from "./components/Bron.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FitList />,
  },
  {
    path: "/zall",
    element: <Zall />,
  },
  {
    path: "/entertain",
    element: <Entertain />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/otsov",
    element: <Otsov />,
  },
  {
    path: "/bron",
    element: <Bron />,
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
