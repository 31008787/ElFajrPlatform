import React, { useEffect, useState } from 'react'
import ModifyForm from './../Components/Presentationals/Forms/modify-form';
import { withRouter, Redirect } from 'react-router';
import getMaladeById from '../middleware/malade/getMaladeById'
import MainPage from './home';

const ModifyPage = ({
    history,
    match
}) => {
    const [state, setState] = useState({ malade: {}, loading: true })
    useEffect(() => {
        async function fetchData() {
            (await getMaladeById(match.params.id).then(res => {
                setState({
                    malade: res,
                    loading: false
                })
            }))
        }
        fetchData()
    }, [match])
    return state.loading ? <MainPage /> :
        state.malade === null ? <Redirect to='page-introuvable' /> : <div>
            <ModifyForm initValues={state.malade} onClose={e => history.push('/')} />
            <MainPage />
        </div>
}

export default withRouter(ModifyPage)