
import './App.css'
import {getCurrentYear, getFooterCopy} from "../utils/utils.js" 
import Notifications from '../Notifications/Notifications.jsx'

function App() {
  return (
    <>
    <div className='root-notifications'><Notifications /></div>
      <div className='App-header' alt="holberton logo">
        <img src="src/assets/holberton-logo.jpg" alt="holberton logo" ></img>
        <h1 role="heading">School dashboard</h1>
      </div>
      <div className='App-body'><p>Login to access the full dashboard</p>
      <label htmlFor="email">Email</label>
      <input id="email" data-testid="email"></input>
      <label htmlFor="pw">Password</label>
      <input id="pw" data-testid="pw"></input>
      <button data-testid="btn" type='submit'>OK</button>
      </div>

      <div className='App-footer'><p>Copyright {getCurrentYear()} - {getFooterCopy()}</p></div>
    </>
  )
}

export default App