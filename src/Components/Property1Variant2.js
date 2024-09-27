import React from 'react'
import './Property1Variant2.css'
import {Link} from 'react-router-dom'
import Property1Default_1 from "./Property1Default_1"
export default function Property1Variant2 (props) {
	return (
		<div className={`Property1Variant2_Property1Variant2 ${props.className}`}>
			<Link to='/acercadeequipo'>
				<div className='Rectangle82'/>
			</Link>
			<Link to='/acercadeequipo'>
				<span className='Equipo'>Equipo</span>
			</Link>
			<Link to='/acercadenosotros'>
				<div className='Rectangle80'/>
			</Link>
			<Link to='/acercadeinvestigacion'>
				<div className='Rectangle81'/>
			</Link>
			<Link to='/acercadeinvestigacion'>
				<span className='Investigacin'>Investigación</span>
			</Link>
			<Link to='/acercadenosotros'>
				<span className='Nosotros'>Nosotros</span>
			</Link>
			<Property1Default_1 className='Component2'/>
		</div>
	)
}