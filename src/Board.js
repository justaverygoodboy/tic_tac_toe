import React from 'react';
import Square from './Square';
import './Board.css';
class Board extends React.Component {
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }
    render() {
        const board_numbers = [[0,1,2],[3,4,5],[6,7,8]];
        const board_square = board_numbers.map(
            (row) => (
                <div className="board-row">
                    {row.map((number)=>this.renderSquare(number))}   
                </div>
            )
        )  
        return (
            <div>
                {board_square}
            </div>
        )
    }
}


export default Board;