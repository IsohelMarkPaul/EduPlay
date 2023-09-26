import './App.css'
import Student_Homepage from './component/Student_Homepage'
import Student_Navbar from './component/Student_Navbar'
import Student_Profile from './component/Student_Profile'
import Student_Modules from './component/Student_Modules'
import TeacherLogin from './component/TeacherLogin'
import TeacherSignUp from './component/TeacherSignUp'
import TeacherHomepage from './component/TeacherHomepage'
import TeacherSignIn from './component/TeacherSignUp'
import AdminSignin from './component/AdminSignin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Student_SharedLayout from './component/Student_SharedLayout'
import Student_Login from './component/Student_Login'
import { useState } from 'react'



function App() {

  const [user, setUser] = useState(null)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student_SharedLayout />} >
            <Route index element={<Student_Homepage />} />
            <Route path='Student_Profile' element={<Student_Profile />} />
            <Route path='Student_Modules' element={<Student_Modules />} />
            <Route path='Student_Navbar' element={<Student_Navbar />} />

          </Route>
          <Route path='/Student_Login' element={<Student_Login > </Student_Login>} />
          <Route path='/TeacherLogin' element={<TeacherLogin />} />
          <Route path='/TeacherSignUp' element={<TeacherSignUp />} />
          <Route path='/TeacherHomepage' element={<TeacherHomepage />} />



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
