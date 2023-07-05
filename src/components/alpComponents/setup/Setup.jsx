import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import SetupHome from './SetupHome'
import Product from './Product'
import ModCorporate from './ModCorporate'
import AddFacility from './AddFacility'
import EditFacility from './EditFacility'
import AddUser from './AddUser'
import EditUser from './EditUser'

const Setup = () => {
    let dispatch = useDispatch();
    let enterpriseId=2;
    let [facilityId,setFacilityId]=useState(null);
    useEffect(() => {
    }, [dispatch])
    let [screens, setScreen] = useState("");
    let [userId,setUserId]=useState(null);
    let [productNumber,setProductNumber]=useState(null)
    const handleChangeSelect = (e) => {
        setScreen(e.target.value)
    }
    return (
        <>
            <div className='reportsHeaders'>
                <select value={screens} onChange={handleChangeSelect}>
                    <option value="">Corporate</option>
                    <option value="product">Product</option>
                </select>
            </div>
            {
                screens === "" && <SetupHome setScreen={setScreen} enterpriseId={enterpriseId} setFacilityId={setFacilityId} setUserId={setUserId}/>
            }
            {
                screens === "product" && <Product setScreen={setScreen} setProductNumber={setProductNumber} productNumber={productNumber}/>
            }
            {
                screens=== 'modCorporate' && <ModCorporate setScreen={setScreen} enterpriseId={enterpriseId}/>
            }
            {
                screens==='addFacility' && <AddFacility setScreen={setScreen}/>
            }
            {
                screens==="editFacility" && <EditFacility setScreen={setScreen} facilityId={facilityId}/>
            }
            {
                screens==="addUser" && <AddUser setScreen={setScreen}/>
            }
            {
                screens==="editUser"&& <EditUser setScreen={setScreen} userId={userId}/>
            }
        </>
    )
}
export default Setup
