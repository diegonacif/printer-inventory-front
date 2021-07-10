import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import Route from './routes'


function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Route />

      </BrowserRouter>


    </>
  )
}

export default App;
