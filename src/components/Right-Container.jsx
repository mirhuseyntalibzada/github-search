import React from 'react'

function RightContainer() {
    return (
        <div className="right-main-container d-none d-xl-block col-3">
            <div className='right-container'>
                <div>
                    <h6>Latest changes</h6>
                    <div className="d-flex">
                        <div className='line'></div>
                        <div className='news'>
                            <div>
                                <div className='circle'></div>
                                <p className='m-0'>Yesterday</p>
                                <a href="#!">Advanced filtering capabilities for the security overview dashboard</a>
                            </div>
                            <div>
                                <div className='circle'></div>
                                <p className='m-0'>Yesterday</p>
                                <a href="#!">Actions: Jobs executing on self hosted runners will now timeout in 5 days</a>
                            </div>
                            <div>
                                <div className='circle'></div>
                                <p className='m-0'>2 days ago</p>
                                <a href="#!">Secret scanning now detects secrets in GitHub wikis</a>
                            </div>
                            <div>
                                <div className='circle'></div>
                                <p className='m-0'>3 days ago</p>
                                <a href="#!">GitHub Actions: Hardware accelerated Android virtualization now available</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-bottom-container">
                <h6 className='m-0'>Explore repositories</h6>
                <div>
                    <div className='top'>
                        <div>
                            <div className="img-container">
                                <img src="https://avatars.githubusercontent.com/u/21003710?s=40&v=4" alt="" srcset="" />
                            </div>
                            <a href="#1">pytorch / xla</a>
                        </div>
                        <div className='star-container'>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                    <div className="middle">
                        <p className='m-0'>Enabling PyTorch on XLA Devices (e.g. Google TPU)</p>
                    </div>
                    <div className="bottom">
                        <div className='d-flex align-items-center'>
                            <i class="fa-regular fa-star"></i>
                            <p className="m-0">2.3k</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='circle'></div>
                            <p className="m-0">PHP</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='top'>
                        <div>
                            <div className="img-container">
                                <img src="https://avatars.githubusercontent.com/u/5111322?s=40&v=4" alt="" srcset="" />
                            </div>
                            <a href="#1">cesanta / mongoose</a>
                        </div>
                        <div className='star-container'>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                    <div className="middle">
                        <p className='m-0'>Embedded Web Server</p>
                    </div>
                    <div className="bottom">
                        <div className='d-flex align-items-center'>
                            <i class="fa-regular fa-star"></i>
                            <p className="m-0">2.3k</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='circle'></div>
                            <p className="m-0">PHP</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='top'>
                        <div>
                            <div className="img-container">
                                <img src="https://avatars.githubusercontent.com/u/40499291?s=40&v=4" alt="" srcset="" />
                            </div>
                            <a href="#1">freescout-helpdesk / freescout</a>
                        </div>
                        <div className='star-container'>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                    <div className="middle">
                        <p className='m-0'>FreeScout — Free self-hosted help desk & shared mailbox (Zendesk / Help Scout alternative)</p>
                    </div>
                    <div className="bottom">
                        <div className='d-flex align-items-center'>
                            <i class="fa-regular fa-star"></i>
                            <p className="m-0">2.3k</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='circle'></div>
                            <p className="m-0">PHP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightContainer