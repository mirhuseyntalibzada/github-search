import React from 'react'

function UserCard({ alldata }) {
    return (
        <section id='user-card'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-3'>
                    <div className='img-container'>
                        <img style={{ height: "100%", width: "100%" }} src={alldata.avatar_url} alt="" />
                    </div>
                    <h5 className='m-0'>{alldata.login}</h5>
                    <span>-</span>
                    <p className='m-0'>{alldata.type}</p>
                </div>
                <div className='link'>
                    <a target='_blank' href={alldata.html_url}>Profile Page</a>
                </div>
            </div>
        </section>
    )
}

export default UserCard