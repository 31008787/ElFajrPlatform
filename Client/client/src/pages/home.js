import React from 'react'
import '../Base.css'
import './home.css'
import Header from './../Components/Presentationals/WithRouter/header';
import MySearch from './../Components/Containers/Search';
import Malades from './../Components/Containers/Malades';
import AddBtn from '../Components/Presentationals/WithRouter/add-btn';
import Rdvs from '../Components/Containers/Rdvs';
import { withRouter } from 'react-router';

const MainPage = ({
    history
}) => {
    return <div className='home'>
        <div className='main-page'>
        <div className='add--btn'>
            <AddBtn/>
        </div>
        <Header></Header>   
        <div className='page-content'>
            <div className='page-content-left'>
                <MySearch />
                <Malades />
            </div>
            <div className='page-content-right'>
                <Rdvs/>
            </div>
        </div>
    <p className='copyright'>Copyright &copy; {new Date().getFullYear()} Association El Fedjr Dellys. All Rights Reserved.| Privacy Policy.| <strong onClick={e=> history.push('/about-us')}>About Us</strong></p>
    </div>
    </div>
}

export default withRouter(MainPage)