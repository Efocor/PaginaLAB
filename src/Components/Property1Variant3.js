import React from 'react'
import './Property1Variant3.css'
import {Link} from 'react-router-dom'
import Property1Default from "./Property1Default"
export default function Property1Variant3 (props) {
	return (
		<div className={`Property1Variant3_Property1Variant3 ${props.className}`}>
			<Link to='/acercadeequipo'>
				<div className='Rectangle82'/>
			</Link>
			<span className='Equipo'>Equipo</span>
			<Link to='/acercadenosotros'>
				<div className='Rectangle80'/>
			</Link>
			<Link to='/acercadeinvestigacion'>
				<div className='Rectangle81'/>
			</Link>
			<span className='Investigacin'>Investigación</span>
			<span className='Nosotros'>Nosotros</span>
			<Property1Default className='Component1'/>
		</div>
	)
}