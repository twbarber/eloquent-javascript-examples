chessboard(8);

function chessboard(size) {
    let rowBase = buildRow(size);
    for(let i = 0; i < size; i++) {
        let row = i % 2 === 0 ? " " + rowBase : rowBase + (size % 2 === 0 ? " " : "#");
        console.log(row)
    }
}

function buildRow(size) {
    let squares = Math.floor(size/2);
    let base = "";
    for(let i = 0; i < squares; i++) {
        base += "# "
    }
    return size % 2 === 0 ? base.trim() : base
}