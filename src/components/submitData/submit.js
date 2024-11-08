import React from 'react'
import Styles from "./submit.module.css"

const Submit = () => {

    function handleClick(){
        
    }
  return (
    <div className={Styles.submit}>
        <h1>Submitted Data</h1>
        <p>The Data submitted by users will be displayed below</p>
        <button onClick={handleClick}>Save Changes</button>
    </div>
  )
}

export default Submit;