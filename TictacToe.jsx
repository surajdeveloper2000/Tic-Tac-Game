import React, { useState } from 'react'
import './TictacToe.css'

const TictacToe = () => {

    const [board, setBoard] = useState(Array(9).fill(''))
    const [move, setMove] = useState("X")

    const click = (n) => {
        let square = [...board]

        if (board[n] !== '') {
            document.getElementById('demo').innerHTML = 'Alerady Clicked 🧐';
            document.getElementById('demo').style.color = 'red';
            alert('you cant double click on the box 🧐');
            return
        }

        square[n] = move
        setBoard(square)
        if (move === 'X') {
            setMove('O')
        } else {
            setMove('X')
        }

        if (checkWin(square)) {
            document.getElementById('demo').innerHTML = 'Match Winner 🥳';
            document.getElementById('demo').style.color = '#0dee0d';
            alert("hurray 🥳! winner winner chicken dinner ");
            square.fill('');
            setBoard(square)
        }
        if (chekDraw(square)) {
            document.getElementById('demo').innerHTML = 'Ops 😞 ! Match Draw';
            document.getElementById('demo').style.color = '#fff';
            alert('your match is drawn 😞');
            square.fill('');
            setBoard(square)

        }
    }

    const chekDraw = (board) => {
        let count = 0;
        board.forEach(element => {
            if (element !== '') {
                count++;
            }
        });

        if (count >= 9) {
            return true;
        } else {
            return false
        }
    }

    const checkWin = (board) => {
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        let flag = false;
        conditions.forEach(element => {

            if (board[element[0]] !== '' && board[element[1]] !== '' && board[element[2]] !== '') {

                if (board[element[0]] === board[element[1]] && board[element[1]] === board[element[2]]) {
                    flag = true;
                }
            }

        });
        return flag

    }

    return (
        <div className='container'>
        <h1 className='heading'>Hello Buddies Let's Play With Tic-Tac </h1>
            <div className='Tictactoe'>
                <h1>Tic-Tac-Toe</h1>
                <table>
                    <tbody>
                        <tr>
                            <td onClick={() => { click(0) }}>{board[0]}</td>
                            <td onClick={() => { click(1) }}>{board[1]}</td>
                            <td onClick={() => { click(2) }}>{board[2]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => { click(3) }}>{board[3]}</td>
                            <td onClick={() => { click(4) }}>{board[4]}</td>
                            <td onClick={() => { click(5) }}>{board[5]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => { click(6) }}>{board[6]}</td>
                            <td onClick={() => { click(7) }}>{board[7]}</td>
                            <td onClick={() => { click(8) }}>{board[8]}</td>
                        </tr>
                    </tbody>
                </table>
                <h2 id='demo'></h2>
            </div>
        </div>
    )
}

export default TictacToe
