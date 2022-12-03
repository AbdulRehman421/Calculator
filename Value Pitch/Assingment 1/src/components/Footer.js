import React from 'react'
import pendingData from "../data/pendingCount";
function Footer() {
    const qcPending = []
    const qcHold = []
    const MqcPending = []
    const MqcHold = []

    for (let i of pendingData) {
        qcPending.push(i.QcPending);
        qcHold.push(i.QcHold);
        MqcPending.push(i.MqcPending);
        MqcHold.push(i.MqcHold);
    }
    const TotalPendingQc = qcPending.reduce((prev, next) => prev + next, 0)
    const TotalHoldQc = qcHold.reduce((prev, next) => prev + next, 0)
    const TotalPendingMqc = MqcPending.reduce((prev, next) => prev + next, 0)
    const TotalHoldMqc = MqcHold.reduce((prev, next) => prev + next, 0)
    return (<>

        <footer className='flex justify-evenly p-10'>
            <span className=' mx-5 '>  Total Pending QC: <span className=' text-teal-300'>
                {
                    " " + TotalPendingQc
                }
            </span>

            </span>
            <span className=' mx-5'>  Total Hold QC: <span className=' text-teal-300'>
                {
                    " " + TotalHoldQc
                }
            </span>

            </span>
            <span className=' mx-5'>  Total Pending MQC: <span className=' text-teal-300'>
                {
                    " " + TotalPendingMqc
                }
            </span>

            </span>
            <span className=' mx-5'>  Total Hold MQC: <span className=' text-teal-300'>
                {
                    " " + TotalHoldMqc
                }
            </span>

            </span>

        </footer>
        <div className=' flex justify-end py-5'>
            <h2 className=' px-3'>
                Previous
            </h2>
            <h2 className=' text-xl font-bold text-teal-300'>
                1
            </h2>
            <h2 className=' px-3'>
                Next
            </h2>
        </div>
    </>
    )
}

export default Footer