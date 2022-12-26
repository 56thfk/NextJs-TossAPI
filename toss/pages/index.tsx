import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import css from 'styled-jsx/css'

const style = css`
  .button-payment {
    border-radius: 10%;     
    background-color: white ; 
    color: black;           
    font-size: 16px;
    font-weight: bold;         
    padding: 10px 20px;      
  }
  .button-payment-selected {
    border-radius: 10%;     
    background-color: #3182F6;
    transition-duration: 0.2s; 
    color: white;           
    font-size: 16px;
    font-weight: bold;         
    padding: 10px 20px;      
  }
  .button-payment:hover {
    border-radius: 10%;     
    background-color: #3182F6;
    transition-duration: 0.2s; 
    color: white;           
    font-size: 16px;
    font-weight: bold;         
    padding: 10px 20px;      
  }
  .button-payment:disabled {
    border-radius: 10%;     
    background-color: #F2F4F6; 
    color: #4E5968;           
    font-size: 16px;
    font-weight: bold;         
    padding: 10px 20px; 
  }
`
const App = () => {
  const [username, setUsername] = useState('')
  const [payment, setPayment] = useState('')
  const router = useRouter()

  return (
    <div>
      <label>username</label>
      <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginRight: '12px' }}
      />
      <div>
        <label>선택된 결제수단 : {payment}</label>
      </div>
        <div>
          <button className={payment === '카드' ? 'button-payment-selected' : 'button-payment'} onClick={()=>setPayment('카드')}> 카드 </button>
          <button className={payment === '토스페이' ? 'button-payment-selected' : 'button-payment'} onClick={()=>setPayment('토스페이')}> 토스페이 </button>
          <button className={payment === '가상계좌' ? 'button-payment-selected' : 'button-payment'} onClick={()=>setPayment('가상계좌')}> 가상계좌 </button>
          <button className={payment === '휴대폰' ? 'button-payment-selected' : 'button-payment'} onClick={()=>setPayment('휴대폰')}> 휴대폰 </button>
        </div>
        <div>
          <button className='button-payment' disabled={username === '' || payment === ''}
          onClick={() => 
            router.push({
              pathname: `/users/${username}`,
              query: {payment: payment}
              })}>
            결제 수단 선택
          </button>
        </div>
        <style jsx>{style}</style>
    </div>
  )
}

export default App