import React from 'react'
import { Login } from './data/buttons'

const Home = () => {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <label htmlFor="" className="logo k2d font-extrabold text-6xl pb-16 ">
        binscanner
      </label>
      <span className="flex flex-row-reverse lg:flex-col items-center justify-center h-3/5">
        <img src="/assets/logo.png" alt="" className='w-1/4 mr-20 xl:w-1/3 xsm:w-4/5 md:w-2/5 lg:m-0 lg:w-2/6 xl:w-2/6 '/>
        <p className="w-1/2 lg:w-full k2d text-5xl lg:text-3xl p-10 text-center">
          Save your World You Live In
        </p>
      </span>
      <ul className='flex flex-col justufy-center xsm:items-center w-full lg:items-start'>
        {Login.map((el, index) => {
          const {text, style,  href} = el;
          return (
            <li key={index} className={style}>
              <a href={href} className='w-full h-full'> {text} </a>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Home;
