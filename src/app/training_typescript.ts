import { Componente, SuperPagina, Logger, ComponenteDecoratore } from './mia-libreria'


@ComponenteDecoratore({
    selettore:"componente",
    template:"<h1>componente nuovo</h1>"
})
class Pagina extends SuperPagina {
    
}

const pagina = new Pagina();