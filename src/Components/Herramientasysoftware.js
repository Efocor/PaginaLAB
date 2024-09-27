import React from 'react'
import './Herramientasysoftware.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Property1Default from "./Property1Default"
export default function Herramientasysoftware () {
	return (
		<div className='Herramientasysoftware_Herramientasysoftware'>
			<img className='Fondo' src = {ImgAsset.PaginadeInicio_Fondo} />
			<div className='Frame1'>
				<div className='Rectangle2'/>
				<span className='Herramientasysoftwares'>Herramientas y softwares</span>
				<span className='EneldinmicocampodelabioingenieralaeficienciaylaprecisinsonfundamentalesparaelavancedelainvestigacinyeldesarrollodenuevastecnologasParaapoyaraloscientficosenestamisinsurgeninnovadoressoftwaresdiseadosespecficamenteparatransformarlaformaenqueloslaboratoriosdebioingenieraoperan'>En el dinámico campo de la bioingeniería, la eficiencia y la precisión son fundamentales para el avance de la investigación y el desarrollo de nuevas tecnologías. Para apoyar a los científicos en esta misión, surgen innovadores softwares diseñados específicamente para transformar la forma en que los laboratorios de bioingeniería operan.</span>
				<div className='Rectangle87'/>
				<img className='image12' src = {ImgAsset.Acercadeinvestigacion_image11} />
				<span className='Somosunequipodeinvestigacinqueconpasinycolaboracintransformaideasenrealidadyconstruyeelfuturo'>Somos un equipo de investigación que, con pasión y colaboración, transforma ideas en realidad y construye el futuro.</span>
				<span className='Copyright20182024'>© Copyright 2018 -  2024 | UOHLAB</span>
				<img className='instagramlogo' src = {ImgAsset.PaginadeProyectos_instagramlogo} />
				<img className='logox' src = {ImgAsset.PaginadeProyectos_logox} />
				<img className='facebook' src = {ImgAsset.PaginadeProyectos_facebook} />
				<img className='image31' src = {ImgAsset.Herramientasysoftware_image31} />
				<img className='image32' src = {ImgAsset.Herramientasysoftware_image32} />
				<span className='Estesoftwareintegramltiplesfuncionesenunaplataformacentralizadaparaoptimizarlainvestigacinyeldesarrolloenbiotecnologa'>Este software integra múltiples funciones en una plataforma centralizada para optimizar la investigación y el desarrollo en biotecnología</span>
				<span className='Software'>Software</span>
				<span className='Repositoriodedatos'>Repositorio de datos</span>
				<span className='Github'>Github</span>
			</div>
			<img className='Rectangle75' src = {ImgAsset.Herramientasysoftware_Rectangle75} />
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
			<Link to='/undefined'>
				<div className='Rectangle79'/>
			</Link>
			<Link to='/undefined'>
				<span className='Software_1'>Software</span>
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