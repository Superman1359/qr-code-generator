import React from 'react'
import QRCode from 'react-qr-code';
import '../App.css';
const Liveqr = ({qrval}) => {
    return (
        <div>
            <div className='qrcode'><QRCode value={qrval} /></div>
        </div>
    )
}

export default Liveqr