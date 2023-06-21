import React from 'react'
import Clinic from './alpComponents/Clinic'
const ALP = ({activeTab,setActiveTab,toggleActive}) => {
    return (
        <>
            {activeTab==='clinic' && <Clinic setActiveTab={setActiveTab} activeTab={activeTab} toggleActive={toggleActive}/>}
        </>
    )
}

export default ALP
