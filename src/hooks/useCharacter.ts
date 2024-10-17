import { useState } from 'react';
import { CharacterSides } from '../types/CharacterSides';
import { mapSpots } from '../data/mapSpots';
import { useNavigate } from 'react-router-dom';

export const useCharacter = (propName: string) => {
    const [pos, setPos] = useState({ x: 5, y: 12 });
    const [side, setSide] = useState<CharacterSides>('down');
    const navigate = useNavigate();

    const moveLeft = () => {
        setPos(pos => {
            const newPos = {
                x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
                y: pos.y
            };
            checkForChallenge(newPos.x, newPos.y);  // Chama a verificação de desafio com o novo valor
            return newPos;
        });
        setSide('left');
    }

    const moveRight = () => {
        setPos(pos => {
            const newPos = {
                x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
                y: pos.y
            };
            checkForChallenge(newPos.x, newPos.y);  // Chama a verificação de desafio com o novo valor
            return newPos;
        });
        setSide('right');
    }

    const moveDown = () => {
        setPos(pos => {
            const newPos = {
                x: pos.x,
                y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y
            };
            checkForChallenge(newPos.x, newPos.y);  // Chama a verificação de desafio com o novo valor
            return newPos;
        });
        setSide('down');
    }

    const moveUp = () => {
        setPos(pos => {
            const newPos = {
                x: pos.x,
                y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y
            };
            checkForChallenge(newPos.x, newPos.y);  // Chama a verificação de desafio com o novo valor
            return newPos;
        });
        setSide('up');
    }

    const canMove = (x: number, y: number) => {
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
            return (mapSpots[y][x] === 1 || mapSpots[y][x] === 2 || mapSpots[y][x] === 3);
        }
        // console.log(mapSpots[y][x]);
        return false;
    }

    const checkForChallenge = (x: number, y: number) => {
        console.log(mapSpots[y][x]);
        if (mapSpots[y][x] === 2) {
            triggerChallenge();  // Exibe o desafio
        }
        if (mapSpots[y][x] === 3) {
            navigate('/final');
        }
    }

    
    
    const triggerChallenge = () => {
        const num1 = Math.floor(Math.random() * 5) + 1;
        const num2 = Math.floor(Math.random() * 5) + 1;

        const operations = ['+', '-', '*', '/'];
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];

    let question = `Qual é o resultada do operação  ${num1} ${randomOperation} ${num2} = ?`;
    let correctAnswer;

       switch (randomOperation) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
        correctAnswer = parseFloat((num1 / num2).toFixed(1));
            break;
    }
    const userAnswer = window.prompt(question, "");

    // Verificar se a resposta está correta
    if (userAnswer && parseFloat(userAnswer) === correctAnswer) {
        alert("Resposta correta!");
    } else {
        alert(`Resposta incorreta. A resposta correta é ${correctAnswer}.`);
    }

    }

    return {
        x: pos.x,
        y: pos.y,
        side,
        moveLeft,
        moveRight,
        moveDown,
        moveUp
    };
}