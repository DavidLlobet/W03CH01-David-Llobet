import Asesor from "./src/Asesor.js";
import Escudero from "./src/Escudero.js";
import Luchador from "./src/Luchador.js";
import Personaje from "./src/Personaje.js";
import Rey from "./src/Rey.js";

import Page from "./src/Page.js";

const joffrey = new Rey("Joffrey", Personaje.familia.arryn, 17, 2);
const jaime = new Luchador("Jaime", Personaje.familia.stark, 30, "AK-47", 7);
const daenerys = new Luchador("Daenerys", Personaje.familia.stark, 20, "AK", 7);
const tyrion = new Asesor("Tyirion", Personaje.familia.stark, 28, daenerys);
const bronn = new Escudero("Bronn", Personaje.familia.stark, 28, jaime, 7);

const personajes = [joffrey, jaime, daenerys, tyrion, bronn];

new Page(personajes);
