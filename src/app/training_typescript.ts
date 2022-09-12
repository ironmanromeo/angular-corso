import { Componente, Logger, SuperPagina, ComponenteDecoratore } from "./mia-libreria";


@ComponenteDecoratore({
    selettore:"componente",
    template:"<h1>componene nuovo</h1>"
})
class Pagina extends SuperPagina {

}
const pagina= new Pagina