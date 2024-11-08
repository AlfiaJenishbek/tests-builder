import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { TodoForm } from "../components/TodoForm";
// import QuestionsPage from   "../pages/QuestionsPage";
import QuestionForm from "../components/QuestionForm";

export const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/login"} />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/new-test",
      element: <TodoForm />,
    },
    {
      path: "/questions",
      element: < QuestionForm />,
    },
    {
      path: "/tests",
      element: <h1>TESTS</h1>,
    },
  ]);
  return <RouterProvider router={routes} />;
};
