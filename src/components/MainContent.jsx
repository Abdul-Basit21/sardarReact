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

                        <div className="row">
                            <div className="col-lg-7 col-sm-6 col-sm-12 black-box-col">
                                <h3 className="black-bg-head">Altin Fiyati Hesaplama</h3>
                                <hr className='blag-bg-hr' />
                                <div className="select-dd-wrap">

                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12 col-md-6">
                                <h3 className="black-bg-head">DOVIZ</h3>

                                <div className="country-est-list">
                                    <ul>
                                        <li>
                                            <div className="est-left">
                                                <span className="country">USD</span>
                                                <span className="currency">DOLAR</span>
                                            </div>
                                            <div className="est-right">
                                                <span className="rate-disabled">32.3312</span>
                                                <span className="rate-current">32.373</span>
                                                <span className="rate-percentage">%0.22</span>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="est-left">
                                                <span className="country">USD</span>
                                                <span className="currency">DOLAR</span>
                                            </div>
                                            <div className="est-right">
                                                <span className="rate-disabled">32.3312</span>
                                                <span className="rate-current">32.373</span>
                                                <span className="rate-percentage">%0.22</span>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="est-left">
                                                <span className="country">USD</span>
                                                <span className="currency">DOLAR</span>
                                            </div>
                                            <div className="est-right">
                                                <span className="rate-disabled">32.3312</span>
                                                <span className="rate-current">32.373</span>
                                                <span className="rate-percentage">%0.22</span>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="est-left">
                                                <span className="country">USD</span>
                                                <span className="currency">DOLAR</span>
                                            </div>
                                            <div className="est-right">
                                                <span className="rate-disabled">32.3312</span>
                                                <span className="rate-current">32.373</span>
                                                <span className="rate-percentage">%0.22</span>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="est-left">
                                                <span className="country">USD</span>
                                                <span className="currency">DOLAR</span>
                                            </div>
                                            <div className="est-right">
                                                <span className="rate-disabled">32.3312</span>
                                                <span className="rate-current">32.373</span>
                                                <span className="rate-percentage">%0.22</span>
                                            </div>

                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>



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