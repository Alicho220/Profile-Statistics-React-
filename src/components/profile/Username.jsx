import React from 'react'
import { Div } from '../../style'
import { UsernameImg, UserNameText } from './style'
import data from '../../database/data' 
import user from '../../assets/icons/user.png'


function Username({userImage, username}) {

    console.log(userImage)

    return (
        <Div>
            <UsernameImg src={`${userImage}`}/>
            
            <UserNameText>{username}</UserNameText>
             
        </Div>
    )
}

export default Username
