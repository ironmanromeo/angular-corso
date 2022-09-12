import {ComponenteDecoratore, Logger, Superpagina } from './mia-libreria'

@ComponenteDecoratore({
    selettore:"componente",
    template:"<h1>Ciao mondo</h1>"
})
class Pagina extends Superpagina{

}

const page=new Pagina()