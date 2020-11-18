import React from 'react'
import { GeneralContainer, ProgressBar, ProgressStatus, Container, Icon } from './style'
import taxi from '../../assets/icons/taxi.png'

function Progress({course,percent,icon}) {
    return (
        <GeneralContainer>
            <Container>
                <div>
                    <p>{course}</p>
                    <p>{percent}%</p>
                </div> 
                <ProgressBar>
                    <ProgressStatus percent={percent} />
                </ProgressBar>
            </Container>
            <Icon src={icon} />    
        </GeneralContainer>
    )
}

export default Progress
