import React from "react";
// import Card from './Card'
import pendingData from "../data/pendingCount";

function Cards() {
    return (
        <>

            <div className=" flex justify-between px-12 mb-5">
                <h2 className=" text-3xl">
                    Tagging and Data Entry Pending Count
                </h2>
                <input type="text" placeholder="Filter" className=" w-1/3 text-center rounded-sm text-black" />
            </div>
            <div className="product flex flex-wrap justify-around">
                {pendingData.map((product) => (

                    <div className=" max-w-xl  m-4 border-2 rounded-xl bg-gradient-to-br from-white
                                    to-teal-500 text-black border-black hover:scale-105 ease-in-out"
                        key={product.number}>
                        <h3 className=" text-center text-xl font-bold p-5  mb-5 mt-7 ">
                            {product.productName}
                        </h3>
                        <div className="info flex mx-5">
                            <div className="qc flex-col m-2 ">
                                <h5 className=" py-4">Qc Pending : <span className=" font-bold"> {product.QcPending}</span></h5>
                                <h5 className=" py-4">Qc Pending :  <span className=" font-bold"> {product.QcHold} </span></h5>
                            </div>

                            <div className="mqc flex-col m-2">
                                <h5 className=" py-4">Mqc Pending : <span className=" font-bold"> {product.MqcPending} </span> </h5>
                                <h5 className=" py-4">Mqc Pending : <span className=" font-bold">{product.MqcHold} </span> </h5>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </>
    );
}

export default Cards;
