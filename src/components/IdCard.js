import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className='card-container'>
        <div>
            <img src={picture} alt="" />
        </div>
        <div className='card-detail-container'>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth.toString().split(" ").slice(0, 4).join(" ")}</p>
        </div>
        
    </div>
  )
}

export default IdCard