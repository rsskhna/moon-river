import ReactDOM from 'react-dom/client'
import App from './components/app/App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
