import React from 'react'
import './AcercadeEquipo.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Property1Default_1 from "./Property1Default_1"
export default function AcercadeEquipo () {
	return (
		<div className='AcercadeEquipo_AcercadeEquipo'>
			<img className='Fondo' src = {ImgAsset.PaginadeInicio_Fondo} />
			<div className='Frame3'>
				<div className='Rectangle2'/>
				<span className='DrAlejandroTorresEnero2019Junio2022InvestigadorPrincipalDesarrollodenuevastcnicasenprocesamientodeimgenesmdicasActualmentetrabajaenCentrodeDiagnsticoporImgenesAvanzadascomoDirectordeInnovacin'>Dr. Alejandro Torres (Enero 2019 - Junio 2022) Investigador Principal Desarrollo de nuevas técnicas en procesamiento de imágenes médicas.  Actualmente trabaja en Centro de Diagnóstico por Imágenes Avanzadas como Director de Innovación.</span>
				<Link to='/miembrodeequipoantiguo'>
					<span className='DraMarianaLpezFebrero2017Noviembre2021InvestigadoraSeniorInvestigacinenterapiasgenticasparaenfermedadesrarasActualmentetrabajaenInstitutodeTerapiasAvanzadascomoCoordinadoradeProyectos'>Dra. Mariana López (Febrero 2017 - Noviembre 2021) Investigadora Senior Investigación en terapias genéticas para enfermedades raras Actualmente trabaja en Instituto de Terapias Avanzadas como Coordinadora de Proyectos.</span>
				</Link>
				<span className='IngRicardoMoralesMayo2020Abril2023CoordinadordeProyectosImplementacindesistemasdeautomatizacinenfbricasActualmentetrabajaenAutomatechSolutionscomoEspecialistaenSistemasdeAutomatizacin'>Ing. Ricardo Morales (Mayo 2020 - Abril 2023) Coordinador de Proyectos Implementación de sistemas de automatización en fábricas.  Actualmente trabaja en Automatech Solutions como Especialista en Sistemas de Automatización.</span>
				<img className='image' src = {ImgAsset.AcercadeEquipo_image} />
				<Link to='/miembrodeequipoantiguo'>
					<img className='image_1' src = {ImgAsset.AcercadeEquipo_image_1} />
				</Link>
				<img className='image_2' src = {ImgAsset.AcercadeEquipo_image_2} />
				<div className='Rectangle93'/>
				<img className='image13' src = {ImgAsset.Acercadeinvestigacion_image11} />
				<span className='Somosunequipodeinvestigacinqueconpasinycolaboracintransformaideasenrealidadyconstruyeelfuturo'>Somos un equipo de investigación que, con pasión y colaboración, transforma ideas en realidad y construye el futuro.</span>
				<span className='Copyright20182024'>© Copyright 2018 -  2024 | UOHLAB</span>
				<img className='instagramlogo' src = {ImgAsset.PaginadeProyectos_instagramlogo} />
				<img className='logox' src = {ImgAsset.PaginadeProyectos_logox} />
				<img className='facebook' src = {ImgAsset.PaginadeProyectos_facebook} />
				<span className='NuestroEquipodeTrabajo'>Nuestro Equipo de Trabajo</span>
				<span className='AntiguosMiembrosdelEquipo'>Antiguos Miembros del Equipo</span>
				<div className='Rectangle111'/>
				<span className='DraCarolMoraga'>Dra. Carol Moraga </span>
				<span className='DoctorenIngenieradeSistemasComplejosUniversidadAdolfoIbez'>Doctor en Ingeniería de Sistemas Complejos, Universidad Adolfo Ibáñez</span>
				<div className='Rectangle112'/>
				<span className='DrAlexDiGenova'>Dr. Alex Di Genova</span>
				<span className='InvestigadoraSeniorAnlisisdedatosgenmicosparabiomarcadoresneurodegenerativas'> Investigadora Senior Análisis de datos genómicos para biomarcadores neurodegenerativas</span>
				<div className='Rectangle113'/>
				<span className='DraAndreaMontalvo'>Dra. Andrea Montalvo</span>
				<div className='Rectangle120'/>
				<span className='Verperfil'>Ver perfil</span>
				<div className='Rectangle123'/>
				<span className='Verperfil_1'>Ver perfil</span>
				<div className='Rectangle121'/>
				<span className='Cargarms'>Cargar más</span>
				<div className='Rectangle122'/>
				<span className='Verperfil_2'>Ver perfil</span>
				<img className='image_3' src = {ImgAsset.AcercadeEquipo_image_3} />
				<img className='image17' src = {ImgAsset.PaginadeProyectosProyecto_image17} />
				<span className='PhDinbioinformaticsUniversitClaudeBernardLyon1Francia'>PhD in bioinformatics, Université Claude Bernard Lyon 1, Francia</span>
				<img className='image18' src = {ImgAsset.AcercadeEquipo_image18} />
			</div>
			<img className='Rectangle75' src = {ImgAsset.AcercadeEquipo_Rectangle75} />
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
			<Property1Default_1 className='Component2'/>
		</div>
	)
}