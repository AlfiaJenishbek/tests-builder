import LoginForm from "./components/LoginForm"
import { TodoForm } from "./components/TodoForm"


export const App= () => {
  return(
    <div>
      <h1>Login</h1>
      <LoginForm/>
      <TodoForm/>
      
    </div>
  )
}