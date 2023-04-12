import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { History } from '../pages/History'
<<<<<<< HEAD
import { DefaultLayout } from '../layouts/DefaultLayout'
=======
>>>>>>> main

export function Router() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
=======
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
>>>>>>> main
    </Routes>
  )
}
