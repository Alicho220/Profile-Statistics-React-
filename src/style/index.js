import styled from 'styled-components'

export const Div = styled.div`
    margin:${({m})=> m?m: null};
    padding:${({p})=> p?p: null};
    background-color:${({bc})=> bc?bc: null};
    
`