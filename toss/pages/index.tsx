import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import css from 'styled-jsx/css'
import { MdCreditCard, MdChatBubble, MdPayments, MdPhoneAndroid, MdOutlinePayments } from "react-icons/md";

const style = css`
  .wrapper {
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }
  .label {
    font-size: 16px;
    font-weight: bold;
  }
  .input {
    width: 80%;
  }
  .button-box {
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
  }
  .button-payment {
    width: 150px;
    height: 150px;
    border-radius: 5%;     
    background-color: white ; 
    color: black;           
    font-size: 16px;
    font-weight: bold;         
    padding: 10px 20px;
    margin: 10px;      
  }
  .button-payment-selected {
    width: 150px;
    height: 150px;
    border-radius: 5%;     
    background-color: #3182F6;
    transition-duration: 0.2s; 
    color: white;           
    font-size: 16px;
    font-weight: bold;         
    padding: 10px 20px;
    margin: 10px;       
  }
  .button-payment:hover {
    border-radius: 5%;     
    background-color: #3182F6;
    transition-duration: 0.2s; 
    color: white;           
    font-size: 16px;
    font-weight: bold;         
    padding: 10px 20px;      
  }
  .button-payment:disabled {
    border-radius: 5%;     
    background-color: #F2F4F6; 
    color: #4E5968;           
    font-size: 16px;
    font-weight: bold;         
    padding: 10px 20px; 
  }
  .button-payment-submit {
    width: 100%;
    border-radius: 5%;     
    background-color: white ; 
    color: black;           
    font-size: 16px;
    font-weight: bold;         
    padding: 10px 20px;
    margin-left: auto;
    margin-right: auto; 
  }
  .button-payment-submit:hover {
    border-radius: 5%;     
    background-color: #3182F6;
    transition-duration: 0.2s; 
    color: white;           
    font-size: 16px;
    font-weight: bold;         
    padding: 10px 20px;      
  }
  .button-payment-submit:disabled {
    border-radius: 5%;     
    background-color: #F2F4F6; 
    color: #4E5968;           
    font-size: 16px;
    font-weight: bold;         
    padding: 10px 20px; 
  }
  .label-payment {
    padding: 5px;
  }
`
const App = () => {
  const [username, setUsername] = useState('')
  const [payment, setPayment] = useState('')
  const router = useRouter()

  return (
    <div className='wrapper'>
      <label className='label'>username</label>
      <input
          className='input'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginRight: '12px' }}
      />
      <div>
        <label className='label'>????????? ???????????? : {payment}</label>
      </div>
        <div className='button-box'>
          <button className={payment === '??????' ? 'button-payment-selected' : 'button-payment'} onClick={()=>setPayment('??????')}> 
            <MdCreditCard size={16}/>
            <span className='label-payment'>??????</span> 
          </button>
          <button className={payment === '????????????' ? 'button-payment-selected' : 'button-payment'} onClick={()=>setPayment('????????????')}>
            <MdChatBubble size={16}/> 
            <span className='label-payment'>????????????</span> 
          </button>
          <button className={payment === '????????????' ? 'button-payment-selected' : 'button-payment'} onClick={()=>setPayment('????????????')}>
            <MdPayments size={16}/>  
            <span className='label-payment'>????????????</span> 
          </button>
          <button className={payment === '????????????' ? 'button-payment-selected' : 'button-payment'} onClick={()=>setPayment('????????????')}>
            <MdOutlinePayments size={16}/>  
            <span className='label-payment'>????????????</span> 
          </button>
          <button className={payment === '?????????' ? 'button-payment-selected' : 'button-payment'} onClick={()=>setPayment('?????????')}> 
            <MdPhoneAndroid size={16}/> 
            <span className='label-payment'>?????????</span> 
          </button>
        </div>
        <div>
          <button className='button-payment-submit' disabled={username === '' || payment === ''}
          onClick={() => 
            router.push({
              pathname: `/users/${username}`,
              query: {payment: payment}
              })}>
            ?????? ?????? ??????
          </button>
        </div>
        <style jsx>{style}</style>
    </div>
  )
}

export default App