import React from 'react'
import './Paginadenoticias.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Property1Default from "./Property1Default"
export default function Paginadenoticias () {
	return (
		<div className='Paginadenoticias_Paginadenoticias'>
			<img className='Fondo' src = {ImgAsset.PaginadeInicio_Fondo} />
			<div className='Frame1'>
				<div className='Rectangle2'/>
				<span className='Nuestrasnoticasmsimportantes'>Nuestras noticas más importantes</span>
				<span className='AvanceenIAMdicaNuevoalgoritmomejoralaprecisindiagnsticaenun25usandoimgenesmdicas'>Avance en IA MédicaNuevo algoritmo mejora la precisión diagnóstica en un 25% usando imágenes médicas.</span>
				<span className='DescubrimientoArqueolgicoEncuentranantiguoasentamientoenAsiaCentralrevelandonuevasrutascomerciales'>Descubrimiento ArqueológicoEncuentran antiguo asentamiento en Asia Central, revelando nuevas rutas comerciales.</span>
				<span className='CaminElctricoInnovadorStartuplanzacaminelctricoconautonomade500kilmetrosporcarga'>Camión Eléctrico InnovadorStartup lanza camión eléctrico con autonomía de 500 kilómetros por carga.</span>
				<img className='image' src = {ImgAsset.Paginadenoticias_image} />
				<img className='image_1' src = {ImgAsset.Paginadenoticias_image_1} />
				<img className='image_2' src = {ImgAsset.Paginadenoticias_image_2} />
				<span className='Nuevavacunamuestraresultadosprometedoresenensayosclnicosparatratarciertostiposdecncer'><br/>Nueva vacuna muestra resultados prometedores en ensayos clínicos para tratar ciertos tipos de cáncer</span>
				<span className='NUEVAVACUNAJulio2024'>NUEVA VACUNA<br/>Julio 2024</span>
				<div className='image30'/>
				<span className='Organizacinambientalistadesarrollaunatecnologaquepuedereducirelplsticoenelocanoenun40'>Organización ambientalista desarrolla una tecnología que puede reducir el plástico en el océano en un 40%.</span>
				<span className='ORGANIZACINAMBIENTALISTAEnero2023'>ORGANIZACIÓN AMBIENTALISTA<br/>Enero 2023</span>
				<span className='SelanzaunproyectorealizadoporestudiantesdebioingenieradelauniversidadOHiggins'>Se lanza un proyecto realizado por estudiantes de bioingeniería de la universidad O´Higgins</span>
				<span className='ESTUDIANTESDEBIOINGENIERAAbril2022'>ESTUDIANTES DE BIOINGENIERÍA<br/>Abril 2022</span>
				<span className='AVANCEENIAMarzo2022'>AVANCE EN IA<br/>Marzo 2022</span>
				<span className='DESCUBRIMIENTOARQUEOLGICOFebrero2022'>DESCUBRIMIENTO ARQUEOLÓGICO<br/>Febrero 2022</span>
				<span className='CAMINELECTRICOEnero2022'>CAMIÓN ELECTRICO<br/>Enero 2022</span>
				<img className='image9' src = {ImgAsset.Paginadenoticias_image9} />
				<img className='image_3' src = {ImgAsset.Paginadenoticias_image_3} />
				<img className='image_4' src = {ImgAsset.Paginadenoticias_image_4} />
				<span className='ElCentrodeInnovacinTecnolgicaMarcaunHitoconAvancesSignificativosenlaOptimizacindeRedes'>El Centro de Innovación Tecnológica Marca un Hito con Avances Significativos en la Optimización de Redes</span>
				<img className='image5' src = {ImgAsset.PaginadeInicio_image1} />
				<Link to='/paginadenoticiasnoticia'>
					<div className='Rectangle79'/>
				</Link>
				<Link to='/paginadenoticiasnoticia'>
					<span className='Verms'>Ver más ..</span>
				</Link>
				<div className='Rectangle93'/>
				<img className='image13' src = {ImgAsset.Acercadeinvestigacion_image11} />
				<span className='Somosunequipodeinvestigacinqueconpasinycolaboracintransformaideasenrealidadyconstruyeelfuturo'>Somos un equipo de investigación que, con pasión y colaboración, transforma ideas en realidad y construye el futuro.</span>
				<span className='Copyright20182024'>© Copyright 2018 -  2024 | UOHLAB</span>
				<img className='instagramlogo' src = {ImgAsset.PaginadeProyectos_instagramlogo} />
				<img className='logox' src = {ImgAsset.PaginadeProyectos_logox} />
				<img className='facebook' src = {ImgAsset.PaginadeProyectos_facebook} />
			</div>
			<img className='Rectangle75' src = {ImgAsset.Paginadenoticias_Rectangle75} />
			<img className='image11' src = {ImgAsset.Acercadeinvestigacion_image11} />
			<Link to='/paginadeinicio'>
				<div className='Rectangle82'/>
			</Link>
			<span className='Inicio'>Inicio</span>
			<Link to='/paginadenoticias'>
				<div className='Rectangle76'/>
			</Link>
			<Link to='/undefined'>
				<span className='Noticias'>Noticias</span>
			</Link>
			<Link to='/paginadeproyectos'>
				<div className='Rectangle78'/>
			</Link>
			<Link to='/paginadeproyectos'>
				<span className='Proyectos'>Proyectos</span>
			</Link>
			<Link to='/herramientasysoftware'>
				<div className='Rectangle79_1'/>
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