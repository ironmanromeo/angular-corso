import{Componente, ComponenteDecoratore, Logger, SuperPagina} from './mia-libreria'


@ComponenteDecoratore({
    selettore:"componente",
    template:"<h1>componente nuovo</h1>"
})
class Pagina extends SuperPagina{

}

const pagina = new Pagina()