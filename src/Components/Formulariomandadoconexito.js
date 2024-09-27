import React from 'react'
import './Formulariomandadoconexito.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Property1Default from "./Property1Default"
export default function Formulariomandadoconexito () {
	return (
		<div className='Formulariomandadoconexito_Formulariomandadoconexito'>
			<img className='Fondo' src = {ImgAsset.PaginadeInicio_Fondo} />
			<div className='Frame1'>
				<div className='Rectangle2'/>
				<div className='Rectangle87'/>
				<img className='image12' src = {ImgAsset.Acercadeinvestigacion_image11} />
				<span className='Somosunequipodeinvestigacinqueconpasinycolaboracintransformaideasenrealidadyconstruyeelfuturo'>Somos un equipo de investigación que, con pasión y colaboración, transforma ideas en realidad y construye el futuro.</span>
				<span className='Copyright20182024'>© Copyright 2018 -  2024 | UOHLAB</span>
				<img className='instagramlogo' src = {ImgAsset.PaginadeProyectos_instagramlogo} />
				<img className='logox' src = {ImgAsset.PaginadeProyectos_logox} />
				<img className='facebook' src = {ImgAsset.PaginadeProyectos_facebook} />
				<div className='Rectangle88'/>
				<span className='Suformulariohasidoenviadoconxito'>Su formulario ha sido enviado con éxito</span>
				<span className='Formulariodecontacto'>Formulario de contacto</span>
				<Link to='/formulariodecontacto'>
					<div className='Rectangle80'/>
				</Link>
				<span className='Aceptar'>Aceptar</span>
			</div>
			<img className='Rectangle75' src = {ImgAsset.Formulariomandadoconexito_Rectangle75} />
			<img className='image11' src = {ImgAsset.Acercadeinvestigacion_image11} />
			<Link to='/paginadeinicio'>
				<div className='Rectangle82'/>
			</Link>
			<Link to='/paginadeinicio'>
				<span className='Inicio'>Inicio</span>
			</Link>
			<Link to='/paginadenoticias'>
				<div className='Rectangle76'/>
			</Link>
			<Link to='/paginadenoticias'>
				<span className='Noticias'>Noticias</span>
			</Link>
			<Link to='/paginadeproyectos'>
				<div className='Rectangle78'/>
			</Link>
			<Link to='/paginadeproyectos'>
				<span className='Proyectos'>Proyectos</span>
			</Link>
			<Link to='/herramientasysoftware'>
				<div className='Rectangle79'/>
			</Link>
			<Link to='/herramientasysoftware'>
				<span className='Software'>Software</span>
			</Link>
			<Link to='/formulariodecontacto'>
				<div className='Rectangle81'/>
			</Link>
			<Link to='/formulariodecontacto'>
				<span className='Contacto'>Contacto</span>
			</Link>
			<Property1Default className='Component1'/>
		</div>
	)
}