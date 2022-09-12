import { componente, superpagina, logger, ComponenteDecoratori  } from './mia-libreria'

@ComponenteDecoratori({
    selettore:"componente",
    template:"<h1>componente nuovo</h1>"
})

class pagina extends superpagina{

}

const pagine = new pagina