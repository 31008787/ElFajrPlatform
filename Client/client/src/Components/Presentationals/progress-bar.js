import React from 'react'
import './progress-bar.css'

const ProgressBar = ({
    steps = [],
    currentStep,
}) => {
    return <div className='bar'>
        <div className='progress-bar' style={{ width: `${(currentStep / steps.length) * 100}%`, borderRadius: steps.length === currentStep ? '0' : '0 5% 5% 0 /50%' }}  >
        </div>
        {
            steps.map((step,i)=>
                {
                return <div key={i} className={currentStep>=i+1 ?'step selected':'step'} style={{width:`${100/steps.length}%`}}>{step}</div>
                })
        }
    </div>
}

export default ProgressBar