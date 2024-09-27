import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../Components/index';
import PaginadeInicio from '../Components/PaginadeInicio';
import Paginadenoticias from '../Components/Paginadenoticias';
import PaginadenoticiasNoticia from '../Components/PaginadenoticiasNoticia';
import PaginadeProyectos from '../Components/PaginadeProyectos';
import PaginadeProyectosProyecto from '../Components/PaginadeProyectosProyecto';
import AcercadeNosotros from '../Components/AcercadeNosotros';
import Terminosdeuso from '../Components/terminosdeuso';
import Herramientasysoftware from '../Components/Herramientasysoftware';
import Acercadeinvestigacion from '../Components/Acercadeinvestigacion';
import AcercadeEquipo from '../Components/AcercadeEquipo';
import Miembrodeequipo from '../Components/miembrodeequipo';
import Miembrodeequipoantiguo from '../Components/miembrodeequipoantiguo';
import Formulariodecontacto from '../Components/Formulariodecontacto';
import Formulariomandadoconexito from '../Components/Formulariomandadoconexito';
import Property1Default from '../Components/Property1Default';
import Property1Default_1 from '../Components/Property1Default_1';
import Property1Variant3 from '../Components/Property1Variant3';
import Property1Variant2 from '../Components/Property1Variant2';

const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Redirect to="/paginadeinicio" />
				</Route>
				<Route exact path="/paginadeinicio"><PaginadeInicio /></Route>
				<Route exact path="/paginadenoticias"><Paginadenoticias /></Route>
				<Route exact path="/paginadenoticiasnoticia"><PaginadenoticiasNoticia /></Route>
				<Route exact path="/paginadeproyectos"><PaginadeProyectos /></Route>
				<Route exact path="/paginadeproyectosproyecto"><PaginadeProyectosProyecto /></Route>
				<Route exact path="/acercadenosotros"><AcercadeNosotros /></Route>
				<Route exact path="/terminosdeuso"><Terminosdeuso /></Route>
				<Route exact path="/herramientasysoftware"><Herramientasysoftware /></Route>
				<Route exact path="/acercadeinvestigacion"><Acercadeinvestigacion /></Route>
				<Route exact path="/acercadeequipo"><AcercadeEquipo /></Route>
				<Route exact path="/miembrodeequipo"><Miembrodeequipo /></Route>
				<Route exact path="/miembrodeequipoantiguo"><Miembrodeequipoantiguo /></Route>
				<Route exact path="/formulariodecontacto"><Formulariodecontacto /></Route>
				<Route exact path="/formulariomandadoconexito"><Formulariomandadoconexito /></Route>
				<Route exact path="/property1default"><Property1Default /></Route>
				<Route exact path="/property1default_1"><Property1Default_1 /></Route>
				<Route exact path="/property1variant3"><Property1Variant3 /></Route>
				<Route exact path="/property1variant2"><Property1Variant2 /></Route>
			</Switch>
		</Router>
	);
}

export default RouterDOM;
