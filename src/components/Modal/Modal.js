import '../../style.css'
import React, { useState } from 'react'

export const Modal = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  document.addEventListener('keydown', function (event) {
    if (isOpen && event.key === 'Escape') {
      setIsOpen(!isOpen)
    }
  })

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{label}</button>
      {isOpen && (
        <div className='modal-container'>
          <div className='modal-content'>
            <button
              className='modal-close-button'
              onClick={() => setIsOpen(!isOpen)}
            >
              ✖
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}