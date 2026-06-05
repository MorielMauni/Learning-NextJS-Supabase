import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='text-blue-800 text-xl mb-4 '>Return Home</Link>
    </div>
  )
}