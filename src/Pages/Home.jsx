import React from 'react'
import Pages from '../Components/Pages'
import Banner from '../Components/Banner'
import Cards from '../Components/Cards'
import Pages2 from '../Components/Pages2'


function Home() {
  let arr=['Dress 1','Dress 2','Dress 3','Dress 4']
  return (
    <div>
     
      <Pages/>
       <Banner></Banner>
<div className='grid grid-cols-4'>
       {
        
       arr.map((ele,index)=>(
<Cards key={index} title={ele}>{ele}</Cards>
       ))}
      </div>
      
      <Pages2></Pages2>
    </div>
  )
}

export default Home