// router
import { BrowserRouter, Route } from 'react-router-dom'
// components
import Index from '@/views/index'
import Animation from '@/views/animation/animation'
import Admin from '@/views/admin/admin'

const Router = () => {
  return (
    <>
      <Route path='/animation' component={ Animation } />
      <Route path='/admin' component={ Admin } />
    </>
  )
}

export default Router