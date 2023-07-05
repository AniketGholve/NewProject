import React from 'react'
import Clinic from './alpComponents/clinic/Clinic'
import Ordering from './alpComponents/ordering/Ordering'
import Report from './alpComponents/reporting/Report'
import Setup from './alpComponents/setup/Setup'
import Shipping from './alpComponents/shipping/Shipping'
const ALP = ({ activeTab, setActiveTab, toggleActive }) => {
    return (
        <>
            {activeTab === 'clinic' && <Clinic setActiveTab={setActiveTab} activeTab={activeTab} toggleActive={toggleActive} />}
            {activeTab === 'reporting' && <Report />}
            {activeTab === 'ordering' && <Ordering />}
            {activeTab === 'shipping' && <Shipping />}
            {activeTab === 'setup' && <Setup />}
        </>
    )
}

export default ALP
