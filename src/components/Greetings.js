import React from 'react'

function Greetings(props) {

    let actualGreeting = ""

    if( props.lang === "de") {
        actualGreeting = "Hallo";
    } else if(props.lang === "fr") {
        actualGreeting = "Bonjour"
    }

  return (
    <div>
        <h3> {actualGreeting} {props.children}</h3>
    </div>
  )
}

export default Greetings