import { Componente, SuperPagina, Logger, ComponenteDecoratore } from './mia-libreria'

@ComponenteDecoratore({
    selettore:"componente",
    template:"<h5>compoentdwgdsuj dse nuovo</h5>"
})
class Pagina extends SuperPagina {

}

const pagina = new Pagina()