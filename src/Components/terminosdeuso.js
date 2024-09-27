import React from 'react'
import './terminosdeuso.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Property1Default from "./Property1Default"
export default function Terminosdeuso () {
	return (
		<div className='terminosdeuso_terminosdeuso'>
			<img className='Fondo' src = {ImgAsset.PaginadeInicio_Fondo} />
			<div className='Frame1'>
				<div className='Rectangle2'/>
				<span className='Trminosdeusoyvisita'>Términos de uso y visita</span>
				<span className='SobrelainformacinyfotografasdelsitioLoremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliquaUtenimadminimveniamquisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequatDuisauteiruredolorinreprehenderitinvoluptatevelitessecillumdoloreeufugiatnullaSedutperspiciatisundeomnisistenatuserrorsitvoluptatemaccusantiumdoloremquelaudantiumtotamremaperiameaqueipsaquaeabilloinventoreveritatisetquasiarchitectobeataevitaedictasuntexplicaboNemoenimipsamvoluptatemquiavoluptassitaspernaturautoditautfugitsedquiaconsequunturmagnidoloreseosquirationevoluptatemsequinesciuntNequeporroquisquamestquidoloremipsumquiadolorSiestasdeacuerdoESCRIBENOSYVISTANOSennuestrasredessocialesyfisicamenteenDIRECCIN'>Sobre la información y fotografías del sitio<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br/>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor <br/><br/>Si estas de acuerdo, ESCRIBENOS Y VISTANOS en nuestras redes sociales y fisicamente en DIRECCIÓN</span>
				<div className='Rectangle87'/>
				<img className='image12' src = {ImgAsset.Acercadeinvestigacion_image11} />
				<span className='Somosunequipodeinvestigacinqueconpasinycolaboracintransformaideasenrealidadyconstruyeelfuturo'>Somos un equipo de investigación que, con pasión y colaboración, transforma ideas en realidad y construye el futuro.</span>
				<span className='Copyright20182024'>© Copyright 2018 -  2024 | UOHLAB</span>
				<img className='instagramlogo' src = {ImgAsset.PaginadeProyectos_instagramlogo} />
				<img className='logox' src = {ImgAsset.PaginadeProyectos_logox} />
				<img className='facebook' src = {ImgAsset.PaginadeProyectos_facebook} />
				<Link to='/formulariodecontacto'>
					<div className='Rectangle89'/>
				</Link>
				<span className='Empezarformulario'>Empezar formulario</span>
				<Link to='/paginadeinicio'>
					<div className='Rectangle101'/>
				</Link>
				<Link to='/paginadeinicio'>
					<div className='Rectangle103'/>
				</Link>
				<span className='Verredessociables'>Ver redes sociables</span>
				<span className='Verdireccinfisica'>Ver dirección fisica </span>
			</div>
			<img className='Rectangle75' src = {ImgAsset.terminosdeuso_Rectangle75} />
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