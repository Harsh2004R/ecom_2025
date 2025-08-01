import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider"
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './Redux/store'
createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <Provider>
      <App />
    </Provider>
  </ReduxProvider>


)
