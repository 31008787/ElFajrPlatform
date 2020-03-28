import React,{useEffect} from 'react'
import { HashRouter, Route } from 'react-router-dom';
import MainPage from './pages/home';
import addPage from './pages/add-page';
import maladePage from './pages/malade-page';
import modifyPage from './pages/modify-page';
import rdvPage from './pages/rdv-page';
import { getInputDate } from './Components/Presentationals/rdvs-list';


const ElFadjrApp = ({
    getRdv = f => f,
}) => {
    useEffect(()=>{
        var date=getInputDate(new Date())
        getRdv(date)
    },[])
    return <HashRouter>
        <Route exact path='/' component={MainPage} />
        <Route path='/Ajouter-Malade' component={addPage} />
        <Route exact path='/malades/:id' component={maladePage} />
        <Route path='/malades/:id/Modifier' component={modifyPage}></Route>
        <Route path='/malades/:id/Rendez-Vous' component={rdvPage}></Route>
    </HashRouter>
}

export default ElFadjrApp