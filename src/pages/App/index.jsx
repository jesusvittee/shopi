import { useRoutes, BrowserRouter} from 'react-router-dom'
import { ProviderCards } from '../../context'
import { SingIn } from '../SingIn'
import { NotFound } from '../NotFound'
import { MyOrders } from '../MyOrders'
import { MyOrder } from '../MyOrder'
import { MyAccount } from '../MyAccount'
import { Home } from '../Home'
import { Navbar } from '../../components/Navbar' 
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home/>},
    { path:'/my-account',element:<MyAccount/>},
    { path:'/my-order',element:<MyOrder/>},
    { path:'/my-orders',element:<MyOrders/>},
    { path:'/sign-in',element:<SingIn/>},
    { path:'/*',element:<NotFound/>},
  ])
  return routes
}


function App() {
  return (
    <ProviderCards>
      <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      </BrowserRouter>
    </ProviderCards>
  )
}

export default App
