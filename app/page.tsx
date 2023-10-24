import Image from 'next/image'
import { client } from '../tina/__generated__/client'
export default async function Home() {


  const myPost = await client.queries.holdConnection()

  return (
    <>
      {myPost.data.holdConnection.edges?.map((data) => (
        <div key={data?.node?.id}><p>{data?.node?.title}</p><p>{data?.node?.instruktorName}</p><img src={data?.node?.instruktorImage} alt="img" width={100} height={100} /> <p>{data?.node?.paymentLink}</p></div>
      ))}
    </>
  )
}
