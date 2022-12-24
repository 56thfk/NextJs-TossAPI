import Link from 'next/link'
// import { useRouter } from 'next/router'
import { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState('')

  return (
    <div>
      <label>
        username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginRight: '12px' }}
        />
      </label>
      <p> 깃허브 검색하기 </p>
      <Link href={`/users/${username}`}>
        <a>검색하기</a>
      </Link>
    </div>
  )
}

export default App
/*
const App = () => {
  const [name, setName] = useState('')
  const router = useRouter()

  return (
    <div>
      <button type="button" onClick={() => router.push('/tomato')}>
        tomato로 가기
      </button>
      <p>이름</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '12px' }}
      />
      <button type='button' onClick={() => router.push(`/vegetable/${name}`)}>
        {name}으로 가기
      </button>
      <h2>Link to 'potato' Page</h2>
      <Link href='/vegetable/potato'>
          <a>Move to '/vegetable/potato'</a>
      </Link>
    </div>
  )
}

export default App
*/
