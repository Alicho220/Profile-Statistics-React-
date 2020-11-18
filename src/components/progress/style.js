import style from 'styled-components'


export const GeneralContainer = style.div`
// background-color:blue;
// border:solid 1px red;
display:flex;
justify-content:space-between;
align-items:center;
width:200px;
height:50px;
margin:1rem;

p{
    font-size:11px;
    font-weight 50011;
    color:red;
}

`
export const Container = style.div`
width:150px;
align-self:center;
margin-bottom:11px;
div{
    display:flex;
    justify-content:space-between;   
}


`
export const ProgressBar = style.div`
width: 150px;
height:8px;
background-color:grey;


`
export const ProgressStatus = style.div`
background-color:red;
// border:solid 1px;
width:50%

`
export const Icon = style.img`


`