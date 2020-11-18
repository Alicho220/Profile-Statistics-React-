import React from 'react'
import { InnerDiv, OuterDiv } from './style'

export default function AverageScore({percent}) {
    return (
        <OuterDiv>
            <InnerDiv>
                <div>
                    <h1>{Math.ceil(percent)}%</h1>
                    {/* <br /> */}
                    <p>Average</p> <br /> 
                    <p>Score</p>
                </div>
            </InnerDiv>
        </OuterDiv>
    )
}
