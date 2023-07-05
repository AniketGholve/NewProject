import React, { useState } from 'react'
import ClinicInventoryReport from './ClinicInventoryReport';

const Report = () => {
  let [report, setReport] = useState("");
  const handleChangeSelect=(e)=>{
    setReport(e.target.value)
  }
  return (
    <>
      <div className='reportsHeaders'>
        <select value={report} onChange={handleChangeSelect}>
          <option value="" className='d-none'>Select a Report</option>
          <option value="clinicInventory">Clinic Inventory SnapShot</option>
        </select>
      </div>
      {report === "clinicInventory" && <ClinicInventoryReport/>}
    </>
  )
}

export default Report
