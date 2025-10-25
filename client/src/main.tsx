import { createRoot } from 'react-dom/client'
import './index.css'
import App from '@/App'
import { ToastContainer } from 'react-toastify'
import { TodoContextProvider } from './context/todo.context'

createRoot(document.getElementById('root')!).render(
  <TodoContextProvider>
    <App />
    <ToastContainer 
    position='top-right'
    autoClose ={2000}
    theme='dark'
    pauseOnFocusLoss={true}
    />
  </TodoContextProvider>
)
