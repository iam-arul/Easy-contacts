import React, { useState } from 'react'
import { Image } from 'semantic-ui-react';

const ImagePlaceholder = ({firstName, lastName, src, index}) => {

    const contactsColors = ['4285F4', 'EA4335', 'FBBC05', '34A853'];

    const generateRandomColor = (index) => {
        return (index >= 4) ? `#${contactsColors[(index % 4)]}` : `#${contactsColors[index]}`;
    }

    return (
        <div>
           {src &&
           <Image className='profile-thumb' avatar src={src} /> }
           {!src &&
           
           <div className='profile-thumb' style={{'background' : generateRandomColor(index)}}>
                <span>{firstName[0]}</span>
                <span>{lastName[0]}</span>
            </div> }

        </div>
    )
}

export default ImagePlaceholder;
