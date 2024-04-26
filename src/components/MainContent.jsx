import React from 'react'
import './MainContent.scss'
import AdsBig from '../images/adsBig.png'
import AdsLarge from '../images/adsLarge.png'

function MainContent() {
    return (
        <>
            <div className="container addsTable-main-wrapper">
                <div className="row">
                    <div className="col-lg-2 col-md-4">
                        <img src={AdsLarge} alt="" className="ad-side" />
                    </div>
                    <div className="col-lg-8 col-md-8 middle-col">
                        <img src={AdsBig} alt="" />

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Brim</th>
                                    <th scope="col">Acilis</th>
                                    <th scope="col">Alis</th>
                                    <th scope="col">Satris</th>
                                    <th scope="col">Degisim</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='table-danger-bg'>
                                    <th scope="row"><i class="fa-solid fa-arrow-down-long"></i></th>
                                    <td className='content-tab'>
                                        <span className='coin-bg'></span>
                                        <span>
                                            <h4>Gram Altin</h4>
                                            <p>Gram Altin</p>
                                        </span>
                                    </td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>%0,9</td>
                                </tr>
                                <tr className='table-danger-bg'>
                                    <th scope="row"><i class="fa-solid fa-arrow-down-long"></i></th>
                                    <td className='content-tab'>
                                        <span className='coin-bg'></span>
                                        <span>
                                            <h4>Gram Altin</h4>
                                            <p>Gram Altin</p>
                                        </span>
                                    </td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>%0,9</td>
                                </tr>
                                <tr>
                                    <th scope="row"><i class="fa-solid fa-minus"></i></th>
                                    <td className='content-tab'>
                                        <span className='coin-bg'></span>
                                        <span>
                                            <h4>Yarim Altin</h4>
                                            <p>Yarim Altin</p>
                                        </span>
                                    </td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>%0,9</td>
                                </tr>
                                <tr>
                                    <th scope="row"><i class="fa-solid fa-minus"></i></th>
                                    <td className='content-tab'>
                                        <span className='coin-bg'></span>
                                        <span>
                                            <h4>Tam Altin</h4>
                                            <p>Tam Altin</p>
                                        </span>
                                    </td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>%0,9</td>
                                </tr>
                                <tr className='table-success-bg'>
                                    <th scope="row"><i class="fa-solid fa-arrow-up-long"></i></th>
                                    <td className='content-tab'>
                                        <span className='coin-bg'></span>
                                        <span>
                                            <h4>Gremese Altin</h4>
                                            <p>Gremese Altin</p>
                                        </span>
                                    </td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>%0,9</td>
                                </tr>
                                <tr>
                                    <th scope="row"><i class="fa-solid fa-arrow-down-long"></i></th>
                                    <td className='content-tab'>
                                        <span className='coin-bg'></span>
                                        <span>
                                            <h4>Onis Altin</h4>
                                            <p>Onis Altin</p>
                                        </span>
                                    </td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>%0,9</td>
                                </tr>

                            </tbody>
                        </table>




                    </div>
                    <div className="col-lg-2 col-md-4">
                        <img src={AdsLarge} alt="" className="ad-side" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent