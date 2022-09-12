import { Componente, SuperPagina, Logger, ComponenteDecoratore } from "./mia_libreria"

@ComponenteDecoratore({
    selettore:"componente",
    template:"<h1>Componente nuovo</h1>"
})
class Pagina extends SuperPagina{
    
}

const pagina = new Pagina()