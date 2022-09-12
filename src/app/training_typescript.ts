import {Componente, ComponenteDecorator, SuperPagina} from "./mia-libreria"

@ComponenteDecorator({
    selettore:"componente",
    template:"<p>h1<p>"
})

class Pagina extends SuperPagina{

}

const pagina = new Pagina()