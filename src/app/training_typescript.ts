import { Componente, SuperPagina, logger, ComponenteDecoratore } from './mia_libreria'


@ComponenteDecoratore({
    selettore:"componente",
    template:"<h1> components nuovo </h1>"
})
class Pagina extends SuperPagina{

}

const pagina = new Pagina()