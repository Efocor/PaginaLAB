import React from 'react'
import './Formulariodecontacto.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Property1Default from "./Property1Default"
export default function Formulariodecontacto () {
	return (
		<div className='Formulariodecontacto_Formulariodecontacto'>
			<img className='Fondo' src = {ImgAsset.PaginadeInicio_Fondo} />
			<div className='Frame1'>
				<div className='Rectangle2'/>
				<span className='Formulariodecontacto_1'>Formulario de contacto</span>
				<div className='Rectangle87'/>
				<img className='image12' src = {ImgAsset.Acercadeinvestigacion_image11} />
				<span className='Somosunequipodeinvestigacinqueconpasinycolaboracintransformaideasenrealidadyconstruyeelfuturo'>Somos un equipo de investigación que, con pasión y colaboración, transforma ideas en realidad y construye el futuro.</span>
				<span className='Copyright20182024'>© Copyright 2018 -  2024 | UOHLAB</span>
				<img className='instagramlogo' src = {ImgAsset.PaginadeProyectos_instagramlogo} />
				<img className='logox' src = {ImgAsset.PaginadeProyectos_logox} />
				<img className='facebook' src = {ImgAsset.PaginadeProyectos_facebook} />
				<div className='list'>
					<div className='row'>
					</div>
					<div className='row_1'>
						<div className='Selection'>
							<span className='title'>Motivo de Contacto</span>
							<div className='chipgroup'>
								<div className='chip'>
									<span className='text'>Consulta</span>
								</div>
								<div className='chip_1'>
									<span className='text_1'>Colaboración</span>
								</div>
								<div className='chip_2'>
									<span className='text_2'>Solicitud de Información</span>
								</div>
							</div>
							<span className='info'>Seleccione una opción que describa el motivo de su contacto.</span>
						</div>
					</div>
					<div className='row_2'>
					</div>
				</div>
				<div className='textfield'>
				</div>
			</div>
			<img className='Rectangle75' src = {ImgAsset.Formulariodecontacto_Rectangle75} />
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
			<Link to='/undefined'>
				<div className='Rectangle81'/>
			</Link>
			<Link to='/undefined'>
				<span className='Contacto'>Contacto</span>
			</Link>
			<Property1Default className='Component1'/>
		</div>
	)
}