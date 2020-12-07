// router
import { BrowserRouter, Route } from 'react-router-dom'
// components
import Index from '@/views/index'
import Animation from '@/views/animation/animation'

const Router = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={ Index } />
      <Route path='/animation' component={ Animation } />
    </BrowserRouter>
  )
}

export default Router