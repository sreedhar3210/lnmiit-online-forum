import React from 'react'
import "./css/Post.css"
import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, /*RepeatOneOutlined,*/ ShareOutlined } from '@material-ui/icons'
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';


function Post() {
  const[isModalOpen, setIsModalOpen] = useState(false);
  const Close =<CloseIcon />;

  return (
    <div className='post'> 
      <div className='post_info'>
        <Avatar/>
        <h4>User Name</h4>
        <small>Apr 14</small>
      </div>
      <div className='post_body'>
        <div className='post_question'>
        <p>
          What are the most important skills for an engineering student to develop?
        </p>
        <button onClick={()=> setIsModalOpen(true)} className='post_btnAnswer'>Answer</button>
        <Modal open = {isModalOpen} 
        closeIcon = {Close} 
        onClose={()=>setIsModalOpen(false)}
        closeOnEsc
        center
        closeOnOverlayClick={false}
        styles={{
          overlay:{
            height:"auto"
          }
        }}>
          <div className='modal_question'>
            <h1>What are the most important skills for an engineering student to develop?</h1>
            <p>asked by {" "} <span className='name'>Username1</span> on 
            <span> Apr 14 </span></p>
          </div>
          <div className='modal_answer'>
            <ReactQuill placeholder='Enter your answer'/>
          </div>
          <div className='modal_button'>
          <button className='cancel' onClick={()=> setIsModalOpen(false)}>
                Cancel
              </button>
              <button className='add' type='submit'>
                Add answer
              </button>
          </div>
        </Modal>
        </div>
      </div>
      <div className='post_footer'>
        <div className='post_footerAction'>
            <ArrowUpwardOutlined/>
            <ArrowDownwardOutlined/>
        </div>
        {/* <RepeatOneOutlined/> */}
        <ChatBubbleOutlineOutlined/>
        <div className='post_footerRight'>
          <ShareOutlined/>
          <MoreHorizOutlined/>
        </div>
      </div>
      <p style={{
        color: "rgba(0,0,0,0.5)",
        fontsize:"12px",
        fontWeight:"bold",
        margin:"10px 0"

      }}>1 Answer</p>
      <div style={{
        margin:"5px 0px 0px 0px",
        padding: "5px 0px 0px 20px",
        borderTop: "1px solid lightgray"
      }}className='post_answer'>
        <div style={{
          display:"flex",
          flexDirection:"column",
          width:"100%",
          padding:"10px 5px",
          borderTop:"1px solid lightgray"
        }}
        className='post-answer-container'>
          <div style={{
          display:"flex",
          alignItems:"center",
          marginBottom: "10px",
          fontSize:"12px",
          fontWeight:600,
          colour:"#888"
        }}
         className='post-answer'>
            <Avatar/>
            <div style={{
              margin:"0px 10px"
            }} className='post-info'>
              <p>Username2</p>
              <span>10 hours ago</span>
            </div>
          </div>
          <div className='post-answer'> Here are some of the most important skills for an engineering student to develop: 
            Problem-solving skills, Critical thinking skills, Communication skills, Teamwork & Technical skills</div>
        </div> 
      </div>
    </div>
  )
}

export default Post;
