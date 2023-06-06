import React from 'react'

const ALP = () => {
    return (
        <>
            <div class="clpHomeSection d-flex justify-content-around ">
                <div class="dispense_d m-3 p-3">
                    <section class="dispense_section">
                        <div class="">
                            <a href="#!dispenseToPatient"><i class="fa-solid fa-user-plus mx-3"></i>Dispense to Patient</a>
                        </div>
                    </section>
                </div>
                <div class="inventory_d m-3 p-3">
                    <section class="inventory_section">
                        <div class="">
                            <a href="#!addToInventory"><i class="fa-solid fa-house-chimney-medical mx-3"></i>Add to
                                Inventory</a>
                        </div>
                    </section>
                </div>
            </div>
            <div class="container d-flex justify-content-center mt-5">
                
            </div>
        </>
    )
}

export default ALP
