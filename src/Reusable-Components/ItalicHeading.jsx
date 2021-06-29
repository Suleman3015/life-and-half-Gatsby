import React from 'react'

const ItalicHeading = ({ heading, desc1, desc2 }) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', fontWeight: 900, paddingTop: '6rem'}} className="sm:text-6xl text-2xl font-medium title-font text-black mb-4">
                <i> {heading} </i>
            </h1>
            <p style={{textAlign: 'center', fontWeight: 500}} className=" sm:text-2xl leading-relaxed">{desc1}</p>
            <p style={{textAlign: 'center', fontWeight: 500}} className="mb-8 sm:text-2xl leading-relaxed"> {desc2} </p>
        </div>
    )
}

export default ItalicHeading
