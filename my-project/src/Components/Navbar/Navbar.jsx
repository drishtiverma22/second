import React from 'react'

export default function Navbar()
 {
  const data=[
    {name:"home",link:"/home"},
    {name:"about",link:"/about"},
    {name:"contact",link:"/contact"},
    {name:"feedback",link:"/feedback"}
  ]
   const auth=[
    {name:"sign-in" , link:"/signin",css:"red"},
    {name:"sign-up" , link:"/signup",css:"blue"}
   ]
  return (
    <div>
      <header>
        <nav className='flex items-center justify-between px-2 m-3 bg-blue-400 h-10'>
          <h1 className='flex'>logo</h1>
          <ul className='flex justify-between items-center gap-2'>
          {
            data.map(({name,link},index) =>(
              <li key={index}><a href={data.link}>{name}</a></li>
            ))
            }
          
          </ul>
          <div className='flex items-center gap-2'>
          {
            auth.map(({name,link,css},index)=>(
              <button className={`flex items-center gap-2 bg-${css}-900`}><a href ={link}>{name}</a>
            {console.log(`flex items-center gap-2 bg-${css}-900`)}
              </button>
            )
          )
          
           
          }
          </div>
        </nav>
      </header>
    </div>
  )
}
