import React from 'react'
import data from '../../database/data'
import AverageScore from '../average/AverageScore'
import Username from '../profile/Username'
import Progress from '../progress/Progress'
import { MainDiv, GreyContainer } from './style'
import study from '../../assets/icons/study.png'
import taxi from '../../assets/icons/taxi.png'
import games from '../../assets/icons/games.png'

export default function GeneralProfile() {
    return (
        <>
            {
                data.map((user)=>{
                    console.log(user.username)
                    let url = `https://picsum.photos/id/${user.id*4}/150/150`
                    return(
                        <MainDiv key={user.id}>
                            <Username userImage={url} username={user.username} />
                            <GreyContainer>
                                <Progress course='java' percent={user.java} icon={study} />
                                <Progress course='java' percent={user.python} icon={taxi} />
                                <Progress course='java' percent={user.javascript} icon={games} />                
                            </GreyContainer>
                            <AverageScore percent={(user.java+user.python+user.javascript)/3} /> 
                        </MainDiv>
                    )
                })
            }
        </>
    )
}
