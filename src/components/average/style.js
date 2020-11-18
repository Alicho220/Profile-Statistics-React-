import style from 'styled-components'

export const OuterDiv = style.div`
    border: 2px green solid;
    // width:120px;
    // height:120px;
    position: absolute;
    top: 70%;
    left: 65%;
    border-radius: 50%;
    display:flex;
    // justify-content:center;
    // align-items:center;

`
export const InnerDiv = style.div`
    border: 4px white solid;
    background-color:green;
    width:120px;
    height:120px;
    border-radius: 50%;
    div{
        height:20px;
    }
    p{
        color:white;
        font-size:12px;
        height:1px;
        padding:0;
        margin:0;
    }
    h1{
        font-size:30px;
        color:white;
    }

`