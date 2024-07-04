import { createBrowserRouter } from "react-router-dom";
import Cadastro from "./src/pages/cadastro/index.tsx";
import Feed from "./src/pages/feed/index.tsx";
import Home from "./src/pages/home/index.tsx";
import Login from "./src/pages/login/index.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/feed",
		element: <Feed />,
	},
	{
		path: "/cadastro",
		element: <Cadastro />,
	},
]);

export default router;
