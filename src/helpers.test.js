import {calculateWinner} from './helpers';

test('should return X as the winner if it has the top row', () => {
    const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
    const winner = calculateWinner(squares);
    expect(winner).toBe('X');
});

test('should return O as the winner if it has the bottom row', ()=> {
    const squares = [null, null, null, 'X', 'X', null, 'O', 'O', 'O'];
    const winner = calculateWinner(squares);
    expect(winner).toBe('O');
})

test('should return null if there is no winner', () =>{
    const squares = ['X', null, null, 'O', null, null ,null ,null ,null];
    const winner = calculateWinner(squares);
    expect(winner).toBe(null);
})
