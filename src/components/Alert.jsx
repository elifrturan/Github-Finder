import React from 'react'

const Alert = (props) => {
  return (
    props.error !== null  && (
        <div className="container mt-2">
            <div className={`alert alert-${props.error.type}`}>Anahtar Kelime Giriniz</div>
        </div>
    )
  )
}

export default Alert