import './App.css';
import  QRCode  from 'qrcode';
import { useState } from 'react';
import Liveqr from './Components/Liveqr';
import Input from './Components/Input';
function App() {
  const [qrval, setQrval] = useState("")
  const [qrUrl,setQrUrl] = useState("")
  const handleQr = ()=>{
    QRCode.toDataURL(qrval,{
      width:900,
      margin:3,
    },(err,url)=>{
      if (err){
        return console.log(err)
      }
      setQrUrl(url)
    })
  }
  const handleChange = (e)=>{
    setQrval(e.target.value)
    handleQr()
  }
  return (
    <div className="App">
      <Liveqr qrval={qrval}/>
      <Input handleChange={handleChange}/>
      <a href={qrUrl} download={`${qrval}.png`}>download</a>
    </div>
  );
}

export default App;
