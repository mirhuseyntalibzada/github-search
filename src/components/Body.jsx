import React, { useState } from 'react'
import LeftContainer from './Left-Container'
import RightContainer from './Right-Container'
import UserCard from './UserCard'

function Body({apidata}) {

    return (
        <section id='body'>
            <div className="row m-0">
                <LeftContainer />
                <div className="col-12 col-md-8 col-xl-6 p-0">
                    <div className="custom-container">
                        {apidata.map(item=><UserCard alldata={item}/>)}
                    </div>
                </div>
                <RightContainer />
            </div>
        </section>
    )
}

export default Body