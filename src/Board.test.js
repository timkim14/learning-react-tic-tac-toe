import {render, fireEvent,getByText, queryAllByRole} from '@testing-library/react';
import Board from './Board';
import Square from './Square';

test('board should re-render on each click', ()=>{
    const board = render(<Board/> );
    const squares = board.queryAllByRole('button');
    fireEvent.click(squares[0])
    expect(squares[0].innerHTML).toBe('X');
    fireEvent.click(squares[1])
    expect(squares[1].innerHTML).toBe('O');
    fireEvent.click(squares[5])
    expect(squares[5].innerHTML).toBe('X');
    fireEvent.click(squares[6])
    expect(squares[6].innerHTML).toBe('O');
});

test('status message should alternate between X and O' , () => {
    const {getByText,queryAllByRole} =render(<Board/>)
    const stat = getByText('Next player: X')
    const squares = queryAllByRole('button');
    fireEvent.click(squares[0])
    const stat1 = getByText('Next player: O')
    expect(stat1.innerHTML).toBe('Next player: O')
    fireEvent.click(squares[1])
    const stat2 = getByText('Next player: X')
    expect(stat2.innerHTML).toBe('Next player: X')
    fireEvent.click(squares[2])
    const stat3 = getByText('Next player: O')
    expect(stat3.innerHTML).toBe('Next player: O')
})