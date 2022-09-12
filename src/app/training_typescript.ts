import { componenteDecoratore, logger, SuperPagina } from './mia_libreria'

@logger
@componenteDecoratore({
    selettore:"componente",
    template:"<h5>Componente nuovo</h5>"
})
class Pagina extends SuperPagina{

}

const pagina = new Pagina()