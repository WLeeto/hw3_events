import goblinIcon from "../../img/goblin.png"

export class GridFormer {
  constructor(element) {
    this.element = element;
  }

  createGoblinIcon() {
    const img = document.createElement("img");
    img.src = goblinIcon;
    img.width = 90;
    img.height = 90;
    return img
  }

  create_game_grid() {
    for (let y = 0; y < 4; y++) {
      const row = document.createElement("div");
      row.classList.add("game-field__row");

      for (let x = 0; x < 4; x++) {
        const cell = document.createElement("div");
        cell.classList.add("game-field__cell");
        cell.style.width = `100px`;
        cell.style.height = `100px`;

        row.appendChild(cell);
      }

      this.element.appendChild(row);
    }
  }

  getRandomCell() {
    const cells = this.element.querySelectorAll(".game-field__cell");
    const random = cells[Math.floor(Math.random() * cells.length)];
    console.log(`random ${random}`);
    return random;
  }

  moveImg(img) {
    const currentCell = this.getRandomCell();
    const newCell = this.getRandomCell();

    newCell.appendChild(img);
  }
}
