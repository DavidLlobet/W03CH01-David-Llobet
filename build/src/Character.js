import Component from "./Component";

class Character extends Component {
  character;

  constructor(parentElement, { name, age, alive, serie, phrase, family });
    super(parentElement, `character{selected ? "selected" : ""}`, "li");

    this.character={
      name,
      family,
      age,
      alive,
      serie,
      phrase,
      image
    };

    this.generateHTML();
  

  generateHTML() {
    const {name,family, age, alive, serie, phrase, image};
    this.character;
    const html = 
    `
        <li class="character col">
          <div class="card character__card">
            <img
              src= ${image}
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">`${name} + "y" + ${family} `</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${age} años</li>
                  <li>
                    Estado: ${
                      vivo ? '<i class="fas fa-thumbs-up"></i>' : '<iclass="fas fa-thumbs-down"></i>'
                    }
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>
      `

    this.element.innerHTML= html;
  };
}