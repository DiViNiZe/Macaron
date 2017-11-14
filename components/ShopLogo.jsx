import React from 'react'

const rounded = {
    borderRadius:'50%',
    height:'150px',
    width:'150px',
    overflow:'hidden',
    margin:' 7px 0 0 5px',
    float: 'left',
    backgroundSize: 'cover',

}
const imgage ={
    maxWidth:'100%',
    maxHeight:'100%'
}

const Logo = props =>
(
    <div style={rounded} className='z-depth-3'>
        <img style={imgage} src={props.img} alt=""/>
    </div>
)
export default Logo