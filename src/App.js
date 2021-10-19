import './App.css'
import Main from './components/main/Main'
import Navbar from './components/Navbar/Navbar'
import Uvod from './components/Uvod/Uvod'
import Galerie from './components/Fotogalerie/Galerie'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Aktivity from './components/Aktivity/Aktivity'
import Kontakty from './components/Kontakty/Kontakty'
import Cenik from "./components/Cenik/Cenik"
import Vybaveni from "./components/vybaveni/vybaveni"
function App() {
   return (
      <>
         <Router>
            <Navbar />
            <div className="vse">
               <Switch>
                  <Route path="/" exact>
                     <Main />
                     <Uvod />
                  </Route>
                  <Route path="/galerie" exact>
                     <Galerie />
                  </Route>
                  <Route path="/aktivity" exact>
                     <Aktivity />
                  </Route>
                  <Route path="/vybaveni" exact>
                     <Vybaveni />
                  </Route>
                  <Route path="/kontakt" exact>
                     <Kontakty />
                  </Route>
                  <Route path="/cenik" exact>
                     <Cenik />
                  </Route>
               </Switch>
            </div>
         </Router>
      </>
   )
}

export default App
