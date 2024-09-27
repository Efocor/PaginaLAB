import React from 'react'
import './PaginadeProyectos.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Property1Default from "./Property1Default"
export default function PaginadeProyectos () {
	return (
		<div className='PaginadeProyectos_PaginadeProyectos'>
			<img className='Fondo' src = {ImgAsset.PaginadeInicio_Fondo} />
			<div className='Frame2'>
				<div className='Rectangle2'/>
				<div className='Rectangle93'/>
				<img className='image13' src = {ImgAsset.Acercadeinvestigacion_image11} />
				<span className='Somosunequipodeinvestigacinqueconpasinycolaboracintransformaideasenrealidadyconstruyeelfuturo'>Somos un equipo de investigación que, con pasión y colaboración, transforma ideas en realidad y construye el futuro.</span>
				<span className='Copyright20182024'>© Copyright 2018 -  2024 | UOHLAB</span>
				<img className='instagramlogo' src = {ImgAsset.PaginadeProyectos_instagramlogo} />
				<img className='logox' src = {ImgAsset.PaginadeProyectos_logox} />
				<img className='facebook' src = {ImgAsset.PaginadeProyectos_facebook} />
				<span className='_1'>1</span>
				<span className='_2'>2</span>
				<span className='Next'>Next ></span>
				<Link to='/paginadeproyectosproyecto'>
					<span className='Diseodemicrobiosgenticamentemodificadosquepuedendescomponerplsticosnobiodegradablesensubproductosinofensivos'>Diseño de microbios genéticamente modificados que pueden descomponer plásticos no biodegradables en subproductos inofensivos. </span>
				</Link>
				<div className='Rectangle139'/>
				<span className='DesarrollodedispositivosporttilesqueutilizantecnologadesecuenciacinrpidadeADNparaladeteccindeenfermedadesentiemporeal'>Desarrollo de dispositivos portátiles que utilizan tecnología de secuenciación rápida de ADN para la detección de enfermedades en tiempo real</span>
				<div className='Rectangle140'/>
				<span className='SistemasdeDiagnsticoPorttilesBasadosenADNAbril2022'>Sistemas de Diagnóstico Portátiles Basados en ADN<br/>Abril 2022</span>
				<div className='Rectangle142'/>
				<div className='Rectangle143'/>
				<span className='Nuestrosproyectos'>Nuestros proyectos</span>
				<Link to='/paginadeproyectosproyecto'>
					<img className='WhatsAppImage20240901at1738232' src = {ImgAsset.PaginadeProyectosProyecto_WhatsAppImage20240901at1738232} />
				</Link>
				<img className='image27' src = {ImgAsset.PaginadeProyectos_image27} />
				<Link to='/paginadeproyectosproyecto'>
					<span className='MicrobiosSintticosparalaEliminacindePlsticosEnero2023'>Microbios Sintéticos para la Eliminación de Plásticos<br/>Enero 2023</span>
				</Link>
				<span className='Elmodeladodecrecimientodeplantasseenfocaensimulareldesarrollodelasplantasbajodiversascondicionesambientalescomoluzaguaynutrientes'><br/>El modelado de crecimiento de plantas se enfoca en simular el desarrollo de las plantas bajo diversas condiciones ambientales como luz, agua y nutrientes</span>
				<div className='Rectangle138'/>
				<div className='Rectangle141'/>
				<span className='ModelodecrecimientodeplantasJulio2024'>Modelo de crecimiento de plantas<br/>Julio 2024</span>
				<img className='image26' src = {ImgAsset.PaginadeProyectosProyecto_image28} />
				<span className='Msproyectos'>Más proyectos</span>
				<span className='SostenibleGranjasverticalesurbanasqueutilizanhidroponaparacultivaralimentosfrescos'><br/>Sostenible Granjas verticales urbanas que utilizan hidroponía para cultivar alimentos frescos.</span>
				<div className='Rectangle138_1'/>
				<span className='UrbanasSistemaparamonitorearyreduciremisionescontaminantesenciudades'>Urbanas Sistema para monitorear y reducir emisiones contaminantes en ciudades.</span>
				<div className='Rectangle139_1'/>
				<span className='Herramientaparaconsultasvirtualesyseguimientomdicoenlnea'>Herramienta para consultas virtuales y seguimiento médico en línea.</span>
				<div className='Rectangle140_1'/>
				<span className='PlataformadeTelemedicinaAbril2022'>Plataforma de Telemedicina<br/>Abril 2022</span>
				<div className='Rectangle141_1'/>
				<span className='AgriculturaVerticalJulio2024'>Agricultura Vertical<br/>Julio 2024</span>
				<div className='Rectangle142_1'/>
				<span className='ReduccindeemisionesEnero2023'>Reducción de emisiones<br/>Enero 2023</span>
				<div className='Rectangle143_1'/>
				<img className='image34' src = {ImgAsset.PaginadeProyectos_image34} />
				<img className='image35' src = {ImgAsset.PaginadeProyectos_image35} />
				<img className='image36' src = {ImgAsset.PaginadeProyectos_image36} />
			</div>
			<img className='Rectangle75' src = {ImgAsset.PaginadeProyectos_Rectangle75} />
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
			<Link to='/undefined'>
				<div className='Rectangle78'/>
			</Link>
			<Link to='/undefined'>
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