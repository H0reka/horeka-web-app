import React, {  useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Banner = (props) => {
  const [phone, setPhone] = useState('');
  const formSubmit = async (e) =>{
    e.preventDefault();
    if(phone.length === 0 || phone.length < 10 ){
      toast.error("Please Enter a Valid Phone Number", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });

        return ;
    }
    const now = new Date();
    const timeIST = new Date(now.getTime());
    const date = timeIST.toISOString().split('T')[0];
    const time = timeIST.toTimeString().split(' ')[0];
    const data = {number: phone, date: date, time: time}
    const url = "https://script.google.com/macros/s/AKfycbxo_I8kvWEwAfZd8bb5u8D2AzH7GBmkIealtE2NDyO2pdVhO0v4A6GhjHX7WWJncS5ZaQ/exec"
    const buttonSub = document.getElementById('submit-btn');
    buttonSub.value = "Sending Response.."
    buttonSub.disabled = true;
    buttonSub.classList.add('pointer-events-none');
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        "Content-Type":'application/json'
      },
      body: JSON.stringify(data)
    })
    toast.success("Details Received! We'll be in touch shortly", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
    setPhone('');
    buttonSub.classList.remove('pointer-events-none')
  }

  return (
    <div id="cta" className="cta-section">
      <div className="w-layout-grid p-[1em] cta-grid">
        <div className="cta-content">
          <h1 className="text-[1.62rem] mb-8 text-cus-white">{props.heading}</h1>
          {/* <h1 className="cta-heading">{props.heading}</h1> */}
          <div className="form-block banner-form">
            <form 
            id='phone-form'
              method="post" 
              className="form" 
            >
              <input
                className="text-field banner-input"
                maxLength="10"
                name="mobileNumber"
                placeholder="Phone Number"
                type="tel"
                id="Phone-Number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
              <input
              id='submit-btn'
                type="submit"
                className="btn white button-space"
                value={props.buttontxt}
                onClick={formSubmit}
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right"/>
    </div>
  );
};

export default Banner;
