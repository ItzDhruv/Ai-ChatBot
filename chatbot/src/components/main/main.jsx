import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/gemini-clone-assets/assets/assets";
import { Context } from "../../context/context";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const main = () => {
  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className="main">
      <div className="nav">
        <p id="Gimini-title">Gimini</p>
        <div className="connect-wallet"> 

        <ConnectButton label="Sign in"   />
        </div>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

         { !showResult ?  <> 
          <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        
        </>  :  <div className="result"> 
                    <div className="result-title">
                      <img src={assets.user_icon} alt="" />
                      <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                      <img src={assets.gemini_icon} alt="" />
                    {loading ?
                     <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                        :  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
}

                     
                      </div>                    
                </div>}
        
        <div className="main-bottom">
          <div className="search-box">
            <input  onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder=" Enter a prompt here" onKeyDown={(e) => {   if (e.key === "Enter") { onSent()   }}}></input>
            <div> 

              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
          ©  If it is easy, Everybody can do it. - "Dhruv"       
          </p>
        </div>
      </div>
    </div>
  );
};

export default main;
