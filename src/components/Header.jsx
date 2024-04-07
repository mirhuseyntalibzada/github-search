import React, { useState } from 'react'

function Header({ inputKeyword, alertData }) {

    const [keyword, setKeyword] = useState();
    const [alert] = useState("Your search did not match any users ¯\_(ツ)_/¯")

    const submittedForm = (e) => {
        e.preventDefault()
        if (!keyword) {
            alert("Please fill in the input")
        } else {
            inputKeyword(keyword)
            setKeyword('')
            alertData(alert)
        }
    }

    return (
        <section id='header'>
            <div className='custom-container'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center left-cont'>
                        <div className='bars-container'>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <a href="https://github.com/" className='logo-container'>
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <div>
                            <a href="#!">Dashboard</a>
                        </div>
                    </div>
                    <div className='d-flex align-items-center right-cont'>
                        <form onSubmit={submittedForm} action="">
                            <div className='d-none d-xl-block search-cont'>
                                <div>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder='Type / to search' type="search" />
                                <div>
                                    <i class="fa-solid fa-terminal"></i>
                                </div>
                            </div>
                        </form>
                        <div className='create-cont d-md-flex justify-content-between d-none'>
                            <div>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-caret-down"></i>
                            </div>
                        </div>
                        <div className='d-none d-md-block'>
                            <i class="fa-regular fa-circle"></i>
                        </div>
                        <div className='d-none d-md-block'>
                            <i class="fa-solid fa-code-pull-request"></i>
                        </div>
                        <div>
                            <i class="fa-regular fa-comment"></i>
                        </div>
                        <div className='img-container'>
                            <img src="https://avatars.githubusercontent.com/u/126802509?v=4" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header