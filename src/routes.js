import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { EditContact} from './pages/editContact'
import { NewContact} from './pages/newContact'

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/new' component={NewContact}/>
      <Route path='/edit/:id' component={EditContact}/>
    </Switch>

  )
}