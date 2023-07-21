import '../../style.css'
import React, { useState } from 'react'

/**
 * @function Modal React component for customizable modal display
 *
 * @param {string} label Button text content
 * @param {string} btnClass Button class for styling
 * @param {array} children Content includes between opening and closing tags when invoking the component
 * 
 * @returns {JSX} The modal component
 */

export const Modal = ({ label, children, btnClass }) => {
  const [isOpen, setIsOpen] = useState(false)

  document.addEventListener('keydown', function (event) {
    if (isOpen && event.key === 'Escape') {
      setIsOpen(!isOpen)
    }
  })

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={btnClass}>
        {label}
      </button>
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