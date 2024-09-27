import React from 'react'
import './Acercadeinvestigacion.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Property1Default_1 from "./Property1Default_1"
export default function Acercadeinvestigacion () {
	return (
		<div className='Acercadeinvestigacion_Acercadeinvestigacion'>
			<img className='Fondo' src = {ImgAsset.PaginadeInicio_Fondo} />
			<img className='Rectangle75' src = {ImgAsset.Acercadeinvestigacion_Rectangle75} />
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
			<div className='Frame1'>
				<div className='Rectangle4'/>
				<div className='Rectangle5'/>
				<div className='Rectangle3'/>
				<div className='Rectangle2'/>
				<span className='ModeladodeCrecimientodePlantas'>Modelado de Crecimiento de Plantas</span>
				<span className='ModeladodeRedesdeSealizacin'>Modelado de Redes de Señalización</span>
				<span className='ModeladodeFotosntesis'>Modelado de Fotosíntesis</span>
				<span className='ModeladoEcoEvolutivo'>Modelado Eco-Evolutivo</span>
				<span className='ElmodeladodecrecimientodeplantasseenfocaensimulareldesarrollodelasplantasbajodiversascondicionesambientalescomoluzaguaynutrientesEstosmodelosayudanaprevercmolasplantascrecernendiferentesescenariosoptimizandoelmanejoagrcolaAlintegrardatossobrecondicionesambientalesyprcticasdecultivolosmodelospuedensugerirelmomentoptimoparalasiembrayfertilizacinmejorandoelrendimientoyreduciendoelusoderecursosAdemspuedenadaptarseacondicionesfuturasdecambioclimticoparaajustarprcticasagrcolas'>El modelado de crecimiento de plantas se enfoca en simular el desarrollo de las plantas bajo diversas condiciones ambientales como luz, agua y nutrientes. Estos modelos ayudan a prever cómo las plantas crecerán en diferentes escenarios, optimizando el manejo agrícola. Al integrar datos sobre condiciones ambientales y prácticas de cultivo, los modelos pueden sugerir el momento óptimo para la siembra y fertilización, mejorando el rendimiento y reduciendo el uso de recursos. Además, pueden adaptarse a condiciones futuras de cambio climático para ajustar prácticas agrícolas</span>
				<span className='ElmodeladoderedesdesealizacinenplantasexploracmolassealesinternasyexternassonprocesadasparaactivarrespuestasespecficascomoladefensacontrapatgenosEstosmodelossimulanlainteraccinderutasmolecularesquepermitenalasplantasresponderaestmulosfacilitandoelentendimientodecmosecoordinanlasrespuestasaestrsElmodeladodeestasredesescrucialparamejorarlaresistenciaaenfermedadesyoptimizarlarespuestaacondicionesadversaspermitiendoeldesarrollodeestrategiasmsefectivasdemanejodecultivos'>El modelado de redes de señalización en plantas explora cómo las señales internas y externas son procesadas para activar respuestas específicas, como la defensa contra patógenos. Estos modelos simulan la interacción de rutas moleculares que permiten a las plantas responder a estímulos, facilitando el entendimiento de cómo se coordinan las respuestas a estrés. El modelado de estas redes es crucial para mejorar la resistencia a enfermedades y optimizar la respuesta a condiciones adversas, permitiendo el desarrollo de estrategias más efectivas de manejo de cultivos.</span>
				<span className='ElmodeladodefotosntesissimulacmolasplantasconviertenlaluzsolarenenergaqumicateniendoencuentafactorescomointensidaddeluzconcentracindeCO2ytemperaturaEstetipodemodeladoesfundamentalparaentenderlaeficienciafotosintticaycmopuedesermejoradaLosmodelospermitenpredecircmovariacionesenestosfactoresafectanlaproduccindebiomasaayudandoenlaseleccindevariedadesdeplantasmsproductivasyenlaoptimizacindelascondicionesdecrecimientoparamaximizarlaproduccindealimentos'>El modelado de fotosíntesis simula cómo las plantas convierten la luz solar en energía química, teniendo en cuenta factores como intensidad de luz, concentración de CO2 y temperatura. Este tipo de modelado es fundamental para entender la eficiencia fotosintética y cómo puede ser mejorada. Los modelos permiten predecir cómo variaciones en estos factores afectan la producción de biomasa, ayudando en la selección de variedades de plantas más productivas y en la optimización de las condiciones de crecimiento para maximizar la producción de alimentos.</span>
				<span className='ElmodeladoecoevolutivoestudiacmolasplantasseadaptanyevolucionanenrespuestaacambiosambientalesyecolgicosEstosmodelosintegranaspectosecolgicosyevolutivosparasimularcmolasplantasrespondenafactorescomocompetenciacambioclimticoypresindeherbvorosAlprevercmolasespeciespuedenadaptarseanuevosdesafosestosmodelosofrecenperspectivasvaliosasparalaconservacinymanejodeecosistemasAdemsayudanadisearestrategiasparapreservarlabiodiversidadygestionarrecursosnaturalesdemanerasostenible'>El modelado eco-evolutivo estudia cómo las plantas se adaptan y evolucionan en respuesta a cambios ambientales y ecológicos. Estos modelos integran aspectos ecológicos y evolutivos para simular cómo las plantas responden a factores como competencia, cambio climático y presión de herbívoros. Al prever cómo las especies pueden adaptarse a nuevos desafíos, estos modelos ofrecen perspectivas valiosas para la conservación y manejo de ecosistemas. Además, ayudan a diseñar estrategias para preservar la biodiversidad y gestionar recursos naturales de manera sostenible.</span>
				<div className='Rectangle87'/>
				<img className='image12' src = {ImgAsset.Acercadeinvestigacion_image11} />
				<span className='Somosunequipodeinvestigacinqueconpasinycolaboracintransformaideasenrealidadyconstruyeelfuturo'>Somos un equipo de investigación que, con pasión y colaboración, transforma ideas en realidad y construye el futuro.</span>
				<span className='Copyright20182024'>© Copyright 2018 -  2024 | UOHLAB</span>
				<img className='instagramlogo' src = {ImgAsset.PaginadeProyectos_instagramlogo} />
				<img className='logox' src = {ImgAsset.PaginadeProyectos_logox} />
				<img className='facebook' src = {ImgAsset.PaginadeProyectos_facebook} />
				<Link to='/paginadeproyectos'>
					<div className='Rectangle89'/>
				</Link>
				<img className='imagen11' src = {ImgAsset.Acercadeinvestigacion_imagen11} />
				<img className='imagen21' src = {ImgAsset.Acercadeinvestigacion_imagen21} />
				<img className='imagen31' src = {ImgAsset.Acercadeinvestigacion_imagen31} />
				<img className='imagen41' src = {ImgAsset.Acercadeinvestigacion_imagen41} />
				<Link to='/paginadeproyectos'>
					<span className='Miranuestrosproyectos'>Mira nuestros proyectos</span>
				</Link>
			</div>
		</div>
	)
}