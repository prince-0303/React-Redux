import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import { Store } from './Store.jsx'
import { Provider } from 'react-redux'
import Input from './DisplayOutput/Input.jsx'
import Display from './DisplayOutput/Output.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store =  {Store} >
      {/* <App /> */}
      <Input/>
      <Display/>
    </Provider>
  </StrictMode>
)
