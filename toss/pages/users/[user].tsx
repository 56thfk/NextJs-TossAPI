/* eslint-disable react-hooks/rules-of-hooks */
import Payments from "../pay/Payments"
import { useRouter } from 'next/router'
import { loadTossPayments } from '@tosspayments/payment-sdk'
import { userAgentFromString } from "next/server"

const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq'
const secretKey = 'test_sk_D4yKeq5bgrpyy4BbnlB8GX0lzW6Y'
// 테스트 키 : test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq
// 내 키 : test_ck_XLkKEypNArWeenyA9Me3lmeaxYG5

const user = () => {
  const { query } = useRouter()
  const payment = query.payment as string
  const username = query.user as string
  console.log(query)

  loadTossPayments(clientKey).then(tossPayments => {
    tossPayments.requestPayment(payment, { // 결제 수단 파라미터
      // 결제 정보 파라미터
      amount: 15000,
      orderId: 'aFSrt_ebYSlGen9R8k3ng',
      orderName: '토스 티셔츠 외 2건',
      customerName: username,
      successUrl: 'http://localhost:8080/success',
      failUrl: 'http://localhost:8080/fail',
      headers: {
        Authorization: 
          'Basic' +  Buffer.from(secretKey + ':').toString('base64'),
          'Content-Type': 'application/json'
      }
    })
    .catch(function (error) {
      if (error.code === 'USER_CANCEL') {
        // 결제 고객이 결제창을 닫았을 때 에러 처리
      } else if (error.code === 'INVALID_CARD_COMPANY') {
        // 유효하지 않은 카드 코드에 대한 에러 처리
      }
    })
  })

  if (!user) {
    return null
  }
  return (
    <div>
      <h2>{query.user}</h2>
    </div>
  )
}

// export const getServerSideProps = async () => {
//   try {
//     let user

//     const userRes = await fetch(`https://api.tosspayments.com/v1/payments`, {
//       headers: {
//         Authorization: 'Basic dGVzdF9za19ENHlLZXE1YmdycHl5NEJibmxCOEdYMGx6VzZZOg=='
//       }
//     })
//     user = await userRes.json()
//   } catch(e) {
//     console.log(e)
//   }
// }

export default user
