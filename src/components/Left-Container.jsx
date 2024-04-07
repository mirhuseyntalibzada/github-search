import React from 'react'

function LeftContainer() {
    return (
        <div className="left-main-container d-none d-md-block col-md-4 col-xl-3 p-0">
            <div className="left-container">
                <div className='d-flex align-items-center justify-content-between'>
                    <h6 className='m-0'>Top Repositories</h6>
                    <button className='new-repo-btn'>
                        <i class="fa-solid fa-book"></i>
                        <p className='m-0'>New</p>
                    </button>
                </div>
                <form action="">
                    <input placeholder='Find a repository...' type="search" />
                </form>
                <div>
                    <div>
                        <div className="img-container">
                            <img src="https://avatars.githubusercontent.com/u/126802509?s=16&v=4" alt="" srcset="" />
                        </div>
                        <a href="#!">mirhuseyntalibzada/kaffa</a>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src="https://avatars.githubusercontent.com/u/126802509?s=16&v=4" alt="" srcset="" />
                        </div>
                        <a href="#!">mirhuseyntalibzada/woodmart</a>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src="https://avatars.githubusercontent.com/u/126802509?s=16&v=4" alt="" srcset="" />
                        </div>
                        <a href="#!">mirhuseyntalibzada/results-card</a>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src="https://avatars.githubusercontent.com/u/126802509?s=16&v=4" alt="" srcset="" />
                        </div>
                        <a href="#!">mirhuseyntalibzada/qr-code-card</a>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src="https://avatars.githubusercontent.com/u/126802509?s=16&v=4" alt="" srcset="" />
                        </div>
                        <a href="#!">mirhuseyntalibzada/product-preview-card</a>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src="https://avatars.githubusercontent.com/u/126802509?s=16&v=4" alt="" srcset="" />
                        </div>
                        <a href="#!">mirhuseyntalibzada/order-summary</a>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src="https://avatars.githubusercontent.com/u/126802509?s=16&v=4" alt="" srcset="" />
                        </div>
                        <a href="#!">mirhuseyntalibzada/nft-preview-card</a>
                    </div>
                    <a className='show-more' href="#!">Show more</a>
                </div>
                <div>
                    <h6 className='m-0'>Recent activity</h6>
                    <div>
                        <p className='m-0'>When you take actions across GitHub, we’ll provide links to that activity here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftContainer