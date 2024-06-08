import Card from '@/custom/card'
import Link from 'next/link'
import React from 'react'

function F1() {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center">
        <h1>F1 Page</h1>
        <button className="bg-cyan-500 text-white p-2 mt-2 w-44 rounded-sm">
          <Link href="/f1/f2">Go to F2 page</Link>
        </button>
        <button className="bg-cyan-500 text-white p-2 mt-2 w-44 rounded-sm">
          <Link href="/f3">Go to F3 Page</Link>
        </button>
        <button className="bg-cyan-500 text-white p-2 mt-2 w-44 rounded-sm">
          <Link href="/about">Go to About</Link>
        </button>
      </div>
    </Card>
  );
}

export default F1
