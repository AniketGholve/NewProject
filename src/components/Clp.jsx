import React, { } from 'react'

const CLP = () => {
  return (
    <>
      <div className="isDisabled">
        <div ng-include="'view/header.html'"></div>
      </div>
      <div ng-include="'view/header2.html'"></div>
      <div className="isDisabled">
        <div className="clpHomeSection d-flex justify-content-around ">
          <div className="dispense_d m-3 p-3">
            <section className="dispense_section ">
              <div className="">
                <a href="#!dispenseToPatient"><i className="fa-solid fa-user-plus mx-3"></i>Dispense to Patient</a>
              </div>
            </section>
          </div>
          <div className="inventory_d m-3 p-3">
            <section className="inventory_section">
              <div className="">
                <a href="#!addToInventory"><i className="fa-solid fa-house-chimney-medical mx-3"></i>Add to
                  Inventory</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default CLP
