import React from 'react'
import PropTypes from 'prop-types'


function Header({text,bgColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color:'black'
    }

    //<header style={{backgroundColor :'blue'}}>
    return (
      <header style={headerStyles}>
          <div className="container">
              <h2>{text}</h2>
          </div>
      </header>
    )
  }
Header.defaultProps = {
    text:'Default text',
    bgColor:'white'
}
Header.propTypes = {
    text: PropTypes.string.isRequired
}
export default Header
