const chalk = require('chalk'),
      args = process.argv;
      color = chalk.keyword(args[2]),
      width = args[3],
      height = args[4],
      tile = '\u2588',
      coloredTile = color(tile),
      blankTile = chalk.white(tile),
      twoTile = coloredTile + blankTile;
      twoTileFlipped = blankTile + coloredTile;

function drawTopRow() {
    if (width % 2 === 0) {
        return twoTile.repeat(width / 2) + '\n';
    } else {
        return twoTile.repeat(Math.floor(width / 2)) + coloredTile + '\n';
    }
}

function drawSecondRow() {
    if (width % 2 === 0) {
        return twoTileFlipped.repeat(width / 2) + '\n';
    } else {
        return twoTileFlipped.repeat(Math.floor(width / 2)) + blankTile + '\n';
    }
}

function drawBoard() {
    const twoRows = drawTopRow() + drawSecondRow();
    if (height % 2 === 0) {
        return twoRows.repeat(height / 2);
    } else {
        return twoRows.repeat(Math.floor(height / 2)) + drawTopRow();
    }
}

console.log(drawBoard());