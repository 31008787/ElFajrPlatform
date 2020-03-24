import React from 'react';
import MaladeForm from './malade-form';
import ModifyMalade from '../../../middleware/ModifyMalade';


const ModifyForm=({
    initValues={},
    onClose=f=>f,
})=>{
    console.log(initValues);
    return <MaladeForm onClose={onClose} modify={true} initValues={initValues} onSubmit={malade=>  ModifyMalade(malade)}/>
}

export default ModifyForm