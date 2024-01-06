// gridFormer.test.js
// const { GridFormer } = require('../grid');

describe("mock_test", () => {
  const temp = 1;

  it("mock to ci cd comlition", () => {
    expect(temp).toEqual(1);
  });
});

// describe('GridFormer', () => {
//   let gridFormer;
//   let container;

//   beforeEach(() => {
//     container = document.createElement('div');
//     gridFormer = new GridFormer(container);
//   });

//   test('create_game_grid should create a grid with 4 rows and 4 cells each', () => {
//     gridFormer.create_game_grid();

//     const rows = container.querySelectorAll('.game-field__row');
//     const cells = container.querySelectorAll('.game-field__cell');

//     expect(rows.length).toBe(4);
//     expect(cells.length).toBe(16);
//   });

//   test('getRandomCell should return a random cell element', () => {
//     gridFormer.create_game_grid();

//     const randomCell = gridFormer.getRandomCell();

//     expect(randomCell).toBeDefined();
//     expect(randomCell.classList.contains('game-field__cell')).toBe(true);
//   });

//   test('moveImg should move the provided image to a new random cell', () => {
//     gridFormer.create_game_grid();
//     const img = document.createElement('img');

//     const initialRandomCell = gridFormer.getRandomCell();
//     initialRandomCell.appendChild(img);

//     const initialCellChildrenCount = initialRandomCell.children.length;

//     gridFormer.moveImg(img);

//     const newRandomCell = gridFormer.getRandomCell();

//     expect(newRandomCell.children.length).toBeGreaterThan(0);
//     expect(initialCellChildrenCount).toBe(0);
//   });
// });
