import { GridFormer } from "../grid";

export class GoblinGame {
    constructor() {
        this.grid = new GridFormer(document.querySelector(".game-field")); 
        this.grid.create_game_grid();

        this.misses = 0;
        this.score = 0;

        this.maxMisses = 5;
    }

    startGame() {
        this.spawnGoblin();
        setInterval(() => {
            this.spawnGoblin();
          }, 1000);
    }

    spawnGoblin() {
        const img = this.grid.createGoblinIcon();
        let currentCell = this.grid.getRandomCell();
      
        currentCell.appendChild(img);
      
        const removeGoblin = () => {
            if(currentCell.contains(img)) {
              currentCell.removeChild(img);  
            }
          };
      
        setTimeout(removeGoblin, 1000);
      
        currentCell.onclick = () => {
          this.score++;
          removeGoblin();
        };
      }
}