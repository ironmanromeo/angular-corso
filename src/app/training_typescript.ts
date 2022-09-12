import { Componente,superpagina, Logger, componentedecoratore } from "./mia-libreria"


@componentedecoratore({
    selettore:"componente",
    template:"<h1>Componente Nuovo</h1>"
})
class Pagina extends superpagina{
    

}

const pagina = new Pagina()