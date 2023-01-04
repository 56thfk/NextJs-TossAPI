// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 이 코드는 아직 쓰이지 않는 코드

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
