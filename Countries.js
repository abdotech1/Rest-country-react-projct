import React, {useState, useEffect} from 'react'

const url='https://restcountries.eu/rest/v2/all'

const Countries = () => {
    const [countries, setCountries] = useState([])

    const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        
       }

    useEffect(()=>{
     fetchCountryData()   
    }, [])

    return (
        <>
         <section className="grid">
         {countries.map((country)=>{
              const { numericCode,name,region,subregion,capital,population,flag,alpha3Code} = country

              return(
                  <article key={numericCode}>
                      <div className="hidden">
                          <img src={flag} alt={name} />
                          <div className="details">
                          <h3 className = "country-name"> <span>Name: {name} </span> </h3>
                          <h4>Capital: <span> {capital} </span></h4>
                          <h4>Region: <span> {region} </span></h4>
                          <h4>Subregion: <span> {subregion} </span></h4>
                          <h4>Population: <span> {population} </span>people</h4>
                          <h4 className = "alphaCode">alpha3Code : <span>{alpha3Code}</span></h4>
                          <button>Add To Visited Countries</button>
                          </div>
                      </div>
                  </article>
              )
          })} 
         </section>
        </>
    )
}

export default Countries
