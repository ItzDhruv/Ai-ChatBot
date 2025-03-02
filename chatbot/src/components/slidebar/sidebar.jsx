import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/gemini-clone-assets/assets/assets'
import { Context } from '../../context/context'
const sidebar = () => {

    const [extend , setextend] = useState(false)
    const { onSent, prevPrompts, setRecentPrompt, setPrevPrompts } = useContext(Context);

    const loadPromt = async (prompt) => {
        if (!prevPrompts.includes(prompt)) {  
            setPrevPrompts([...prevPrompts, prompt]);  // Add only if not present
        }
        setRecentPrompt(prompt);
        await onSent(prompt);
    };
    
  return (
  <>
  <div className="sidebar">

    <div className="top">

    <img onClick={() =>setextend(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
    <div className="newchat" onClick={() => window.location.reload()}>
        <img src={assets.plus_icon} alt="" />
        {extend?<p>New chat</p>:null}
    </div>
    {
    
    extend  ?   <div className="recent">
        <p className="recent-title">Recent</p>
        
        {prevPrompts.map((item, index) => {
    return (
        <div onClick={() => loadPromt(item)} className="recent-entry" key={index}>
            <img src={assets.message_icon} alt="" />
            
            <p>{item.slice(0,20)} ....</p>
        </div>
    );
})}
       
    </div> : null   
    }
    </div>

    <div className="bottom">
    <div className="bottom-item recent-entry">
        <img src={assets.question_icon} alt="" />
        {extend?<p>help</p> : null }
    </div>
    <div className="bottom-item recent-entry">
        <img src={assets.history_icon} alt="" />
        {extend?<p>Activity</p> : null }
    </div>
    <div className="bottom-item recent-entry">
        <img src={assets.setting_icon} alt="" />
        {extend?<p>Setting</p> : null }
    </div>

    </div>
  </div>
  </>
  )
}

export default sidebar
