import { GridFormer } from "../grid";

export class GoblinGame {
    constructor() {
        this.grid = new GridFormer(document.querySelector(".game-field")); 
        this.grid.create_game_grid();

        this.hits_number = parseInt(document.querySelector(".hit").textContent)
        this.misses_number = parseInt(document.querySelector(".miss").textContent)

        this.was_hitted = true

        this.scoreToGet = 5;
    }

    startGame() {
        this.spawnGoblin();
        setInterval(() => {
            this.spawnGoblin();
          }, 1000);
    
        document.querySelector(".game-field").addEventListener('click', this.gameLogic.bind(this))
    }

    gameLogic(event) {
      if (event.target.tagName.toLowerCase() == "img") {
        this.hits_number++;
        document.querySelector(".hit").textContent = this.hits_number;
        this.was_hitted = true;
      } else {
        this.misses_number++;
        document.querySelector(".miss").textContent = this.misses_number;
      }
    }

    spawnGoblin() {
        this.win_lose_logic();
        this.set_hitted();
        
        const img = this.grid.createGoblinIcon();
        let currentCell = this.grid.getRandomCell();
      
        currentCell.appendChild(img);
        const removeGoblin = () => {
            if(currentCell.contains(img)) {
              currentCell.removeChild(img);  
            }
          };
        setTimeout(removeGoblin, 1000);

      }

    set_hitted() {
      if (!this.was_hitted) {
        this.misses_number++;
        document.querySelector(".miss").textContent = this.misses_number;
      }
      this.was_hitted = false
    }

    win_lose_logic() {
      if (this.hits_number >= this.scoreToGet) {
        this.set_win()
      }
      if (this.misses_number >= this.scoreToGet) {
        this.set_lose()
      }
    }

    set_win() {
      alert('U WIN!')
    }

    set_lose() {
      alert('U LOSE!')
    }
}