import React from 'react'
import Pages from '../Components/Pages'
import Banner from '../Components/Banner'
import Cards from '../Components/Cards'
import Pages2 from '../Components/Pages2'
import Pages3 from '../Components/Pages3'
import Pages4 from '../Components/Pages4'
import Footer from '../Components/Footer'

function Home() {
  let arr=['IPhone','CornerSofa','Mac','Ultra watch ','Toy car','Bicycle','Ear buds','Glass water bottle']
  let img=['https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SXBob25lfGVufDB8fDB8fHww','https://plus.unsplash.com/premium_photo-1733864827286-d43afe9a1ae7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',"https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxlJTIwbWFjfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1704942968209-6c1e05ef3f95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVsdHJhJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1630332661797-9abe164a7141?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D","https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1655804439989-24758d6e96b8?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1591704951890-0862b2e98acb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym90dGxlfGVufDB8fDB8fHww"]
  return (
    <div>
     
      <Pages/>
       <Banner></Banner>
<div className='grid grid-cols-4'>

       {
        
       arr.map((ele,index)=>(
<Cards  title={ele} img={img[index]}>{ele}</Cards>
       ))}
      </div>
      
      <Pages2></Pages2>
      <Pages3></Pages3>
      <Pages4></Pages4>
      <Footer></Footer>
    </div>
  )
}

export default Home