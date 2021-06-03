import React from 'react'

const header = () => {
    return (
        <header className='header'>
        <div className="world">
             <i class="fas fa-globe-americas"></i>
            <h1>Around The World!</h1>
        </div>
        <a href=""><div className="visited-country">
        <h3>Visited Countries</h3>
        <i class="far fa-flag"></i>
        </div></a>
        </header>
    )
}

export default header
