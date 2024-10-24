import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
    <div className=' bg-purple-900 border-2 border-purple-950 text-lg mt-4 py-2 px-2 rounded-xl hover:bg-purple-600 hover:p3'>
<button>
    <Link href="/country">Click Here</Link>
</button>

    </div>
  )
}

export default Button;