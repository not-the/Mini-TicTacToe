let turn = 0;

// Square onclick
document.querySelectorAll('.s').forEach(element => element.addEventListener('click', event => {
    let square = event.srcElement;

    // Reset
    if(turn === -1) {
        document.querySelectorAll('.s').forEach(e => e.innerText='');
        turn = 0;
        return;
    };

    // Space occupied
    if(square.innerText) return;

    // Determine player turn
    let symbols = ['X','O'];
    let user = turn % 2;
    square.innerText = symbols[user];
    user = 1 - user;

    // Calculate winner
    let sets = square.className.replace(/s /,'').split(' ');
    const allEqual = arr => arr.every(val => val.innerText === arr[0].innerText);
    for(c of sets) if(allEqual(Array.from(document.querySelectorAll(`.${c}`)))) return nextTurn(`${square.innerText} wins! Click anywhere to play again`, -1);

    // Next
    nextTurn();
    function nextTurn(text=`${symbols[user]}'s turn`, new_turn=turn+1) {
        document.querySelector('#t').innerText = text;
        turn = new_turn;
    }
}));