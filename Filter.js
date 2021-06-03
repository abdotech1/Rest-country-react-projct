import React from 'react'

const Filter = () => {
    const filter = () => {
        
                const searching = document.getElementById('searching').value
                const countryName = document.querySelectorAll('.country-name')
                const alphaCode = document.querySelectorAll('.alphaCode')
                 if (searching.length >3){
                countryName.forEach((name) =>{
                    if (name.innerText.toLowerCase().includes(searching.toLowerCase())){
                       name.parentElement.parentElement.parentElement.style.display = 'block'
                     }
                    else{
                        name.parentElement.parentElement.parentElement.style.display = 'none'
                    }                   
                })
              
}
if (searching.length === 3){
    alphaCode.forEach((alpha3Code) =>{
        if (alpha3Code.innerText.toLowerCase().includes(searching.toLowerCase())){
            alpha3Code.parentElement.parentElement.parentElement.style.display = 'block'
         }
        else{
            alpha3Code.parentElement.parentElement.parentElement.style.display = 'none'
        }                   
    })
  
}
    }

    return (
       <section className="filter">
               
               <input type="search" name="search" id='searching'  placeholder="Search for a country..." />
               <input type="button" onClick={filter} value='search' />
               
                
       </section>
    )
}

export default Filter
