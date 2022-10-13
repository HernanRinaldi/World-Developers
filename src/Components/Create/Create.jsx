//-----------------IMPORTS---------------//
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";




//----------------------------FUNCTION CREATE----------------//
export default function Create() {

  //-------------------------- STATE ------------------------//
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState({})

//-------------------------USEEFFECT------------------------------//
// useEffect(() => {
//   dispatch()
// }, [dispatch])

//------------------------STATE LOCAL FORM------------------------//
const [ input_hotels, input_sethotels ] = useState({
  name:"",
  image:"",
  qualification: 0,
  description:"",
  city:"",
  country:"",
  continent:"",

})

// const [rooms, setrooms] = useState({
//   name:"",
//   image:"",
//   price: 0,
//   description:"",
//   category:[],
// })

//------------------------VALIDATIONS-----------------------------//
//let validateName = /^[a-zA-Z\s]+$/;
//let validateUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

const validate = (input_hotels) => {
  let errors = {}
  
  // if (!input_hotels.name.length) {
  //   errors.name = 'name cannot be empty'
  // }

  // if (!validateName.test(input_hotels.name)) {
  //   errors.name = 'Special characters or numbers are not allowed'
  // }

  // if (recipes.find((e) => e.name.toLowerCase() === input_hotels.name.toLowerCase())) {
  //   alert(`The name ${input_hotels.name} already exist, please choose another one!`)
  // }
  // if (input_hotels.image && !validateUrl.test(input_hotels.image)) {
  //   errors.image = 'This is not a valid URL'
  // }

  // if (!input_hotels.summary.length) {
  //   errors.summary = 'Summary cannot be empty'
  // }

  // if (input_hotels.summary.length < 40) {
  //   errors.summary = 'Summary must be at least 40 characters'
  // }

  // if (input_hotels.healthScore < 1 || input_hotels.healthScore > 100) {
  //   errors.healthScore = 'The healt score must be a number between 1 - 100'
  // }
  
  // if (!input_hotels.steps.length) {
  //   errors.steps = 'Your recipe must have steps to follow'
  // }
  
  // if (input_hotels.steps.length < 40) {
  //   errors.steps = 'Your recipe must have more details'
  // }

  // return errors;
  
}

//------------------FUNCTIONS HANDLE-------------------//
function handleChange(e){
  e.preventDefault();
  input_sethotels({
    ...input_hotels,
    [e.target.name]: e.target.value
  })
  // setErrors(
  //   validate({
  //     ...input_hotels,
  //     [e.target.name]: e.target.value,
  //   })
  // )
}
//----------------FUNCTION HANDLE SUBMIT------------------//

function handleSubmit(e) {
  e.preventDefault()
  
  if (Object.keys(errors).length === 0 && input_hotels.country.length > 0) {
    // dispatch(createHotels(input_hotels))

    input_sethotels({
      name:"",
      image:"",
      qualification: 0,
      description:"",
      city:"",
      country:"",
      continent:"",
      services:[],
    })
    
    alert('Hotel created successfully')
  } else {
    alert("Check the fields")
  } 
}

return (

  
      <div>
      <form  onSubmit={(e) => handleSubmit(e)}>
      <h1>Hotel</h1>
      {/*-----------------------NAME------------------------ */} 
      <div className="" >
      <input
      className="" 
      autoFocus
      placeholder="Name..."
      type="text" value={input_hotels.name} 
      name="name" 
      onChange={(e) => handleChange(e)} />
      {errors.name && <p className="" >{errors.name}</p>}

      {/*--------------------------IMAGE------------------- */}
      <div className=''>
      <input
      className=""
      placeholder= "Load URL Image..." 
      type="url" 
      value={input_hotels.image} 
      name="image" 
      onChange={(e) => handleChange(e)} />
      {errors.image && <p className="" >{errors.image}</p>}
      </div>



      {/*--------------------------DESCRIPTION----------------------- */}
      <div >
      <textarea
      className="" 
      placeholder="Description..."
      type="text" 
      value={input_hotels.description} 
      name="description" 
      maxLength="1000" 
      onChange={(e) => handleChange(e)}>
      </textarea>
      {errors.description && <p className="">{errors.description}</p>}
    </div>


        {/*--------------------QUALIFICATION--------------------------- */}
      <div className=''>
      <label className=''>Qualification</label>
      <input 
      className="range"
      type="range" min="0" max="5" 
      value={input_hotels.qualification} 
      name="qualification" 
      onChange={(e) => handleChange(e)} />
      {<p className="" > Value: {input_hotels.qualification}</p>}
    </div>

      {/*--------------------------CITY----------------------- */}
      <h3>Location:</h3>
      <div >
      <input
      className="" 
      placeholder="City..."
      type="text" 
      value={input_hotels.city} 
      name="city" 
      onChange={(e) => handleChange(e)}>
      </input>
      {errors.city && <p className="">{errors.city}</p>}
      </div>

     {/*--------------------------COUNTRY----------------------- */}
     <div >
      <input
      className="" 
      placeholder="Country..."
      type="text" 
      value={input_hotels.country} 
      name="country"  
      onChange={(e) => handleChange(e)}>
      </input>
      {errors.country && <p className="">{errors.country}</p>}
      </div>

      {/*--------------------------CONTINENT----------------------- */}
     <div >
      <input
      className="" 
      placeholder="Continent..."
      type="text" 
      value={input_hotels.continent} 
      name="continent" 
      onChange={(e) => handleChange(e)}>
      </input>
      {errors.continent && <p className="">{errors.continent}</p>}
      </div>

      {/*--------------------------SERVICES----------------------- */}
     <div >
      <h3>Services:</h3>
      <select 
       
      value={input_hotels.services} 
      name="services" 
      onChange={(e) => handleChange(e)}>
        <option>meeting</option>
        <option>spa</option>
        <option>piscina</option>
        <option>wifi</option>
        <option>parking</option>
        <option>admite mascotas</option>
        <option>barbacoa</option>
        <option>gym</option>
        <option>Biking Tours</option>
      </select>
      {errors.services && <p className="">{errors.services}</p>}
      </div>

    {/*----------------------------BUTTON------------------------ */}
    <div>
      <button className='' 
      type="submit" 
      onClick={(e) => handleSubmit(e)}>Create</button>
    </div>

    </div>
    </form>
    </div>

)
}
