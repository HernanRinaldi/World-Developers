import React from 'react'
import { useSelector } from 'react-redux';

function Paginado({pages, setPages}){
  const  hotels  = useSelector( state => state.reducerHotel.hotels )

  const allPage=Math.ceil(hotels.length/8);
  const pageNumber=[]

  for(let i=0; i<=allPage; i++){
    pageNumber.push(i)
  }

  const prev=(e)=>{
    e.preventDefault();
    if(pages<=0){
      setPages(0)
    }else{
      setPages(pages-8)
    }
  }

  const next=(e)=>{
    e.preventDefault();
    if(hotels.length<8){
      {
        return;
      }
    }else{
      setPages(pages+8)
    }
  }

  
  const paginadoNumber=(pages)=>{
    setPages(pages)
  }

  return(
    <div>
      <button onClick={prev} disabled={pages<=0}>{'<<'}</button>

        {
          pageNumber?.map(num=>(
            <button key={num} onClick={paginadoNumber}>
              <a>{num+1}</a>
            </button>
          ))
        }

      <button onClick={next} disabled={pages>=allPage}>{'>>'}</button>
    </div>
  )
}

export default Paginado;

