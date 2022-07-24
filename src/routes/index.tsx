import {Routes, Route} from 'react-router-dom'
import MainPage from '../pages/main-page/index'
import Projects from '../pages/projects'

const Router = ()=>{
    return(
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/projetos'  element={<Projects/>} />
        </Routes>
    )
}

export default Router
