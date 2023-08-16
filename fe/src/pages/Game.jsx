import React from 'react'
import { useState } from "react";
import gambarBatu from '../assets/images/batu.png'
import gambarGunting from '../assets/images/gunting.png'
import gambarKertas from '../assets/images/kertas.png'
import gambarRefresh from '../assets/images/refresh.png'
import '../assets/css/game.css'

const Game = () => {

    let midText = document.getElementById('mid-text')
    let playerChoice
    let comFinalChoice

    const [isRock, setIsRock] = useState(false)
    const [isScissor, setIsScissor] = useState(false)
    const [isPaper, setIsPaper] = useState(false)

    const [isComRock, setIsComRock] = useState(false)
    const [isComScissor, setIsComScissor] = useState(false)
    const [isComPaper, setIsComPaper] = useState(false)

    const [gameStatus, setGameStatus] = useState('default')
    const [logic, setLogic] = useState(1)


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
  
function comChoose(){
    let result = getRandomArbitrary(1,4)
    if (result == 1){
        setIsComRock(true)
    } else if (result == 2){
        setIsComScissor(true)
    } else{
        setIsComPaper(true)
    }
}

function changeMidText(){
    if(gameStatus === 'default'){
        return('text-vs');
    } else if (gameStatus === 'win'){
        return('text-win')
    } else if (gameStatus === 'lose'){
        return('text-lose')
    } else{
        return('text-draw')
    }
}

class Result{
    constructor(text, color){
        this.text = text;
        this.color = color;
    }

    show(){
        midText.innerHTML = this.text;
        midText.style.backgroundColor = this.color;
        midText.style.color = 'white';
        midText.style.borderRadius = '25px';
        midText.style.transform = 'rotate(-30deg)';
        midText.style.fontSize = '5vw';
        midText.style.padding = '20px';
    }
}

let win = new Result('YOU WIN', 'green')
let lose = new Result('YOU LOSE', 'red')
let draw = new Result('DRAW', 'orange')


function refreshBoard(){
    // midText.innerHTML = "VS";
    // midText.style.backgroundColor = '';
    // midText.style.color = '';
    // midText.style.borderRadius = '';
    // midText.style.transform = '';
    // midText.style.fontSize = '';
    // midText.style.padding = '';
    console.log('board refresh')
    setGameStatus('default');

    setIsRock(false);
    setIsPaper(false);
    setIsScissor(false);

    setIsComRock(false);
    setIsComPaper(false);
    setIsComScissor(false);
}


function condition(){
    comChoose()
    if((isRock && isComRock) || (isScissor && isComScissor) || (isPaper && isComPaper)){
        // showDraw();
        
        disableEnable();
        setGameStatus('draw');
    } else if (isRock && isComPaper){
        // showLose();
        disableEnable();
        setGameStatus('lose');
    } else if (isRock && isComScissor){
        // showWin();
        disableEnable();
        setGameStatus('win');
    } else if (isScissor && isComPaper){
        // showWin();
        disableEnable();
        setGameStatus('win');
    } else if (isScissor && isComRock){
        // showLose();
        disableEnable();
        setGameStatus('lose');
    } else if (isPaper && isComScissor){
        // showLose();
        disableEnable();
        setGameStatus('lose');
    } else if (isPaper && isComRock){
        // showWin();
        disableEnable();
        setGameStatus('win');
    }
}

function disableEnable(){
    setLogic(logic * -1)
    if (logic === 1){
        document.getElementById('1').style.pointerEvents = 'none';
        document.getElementById('2').style.pointerEvents = 'none';
        document.getElementById('3').style.pointerEvents = 'none';
        console.log('disableEnable: stop, ' + logic);
    }
    if (logic !== 1){
        document.getElementById('1').style.pointerEvents = 'auto'; 
        document.getElementById('2').style.pointerEvents = 'auto'; 
        document.getElementById('3').style.pointerEvents = 'auto'; 
        console.log('disableEnable: start, ' + logic);
    }
}


function decideResult(choice){
    if (choice === 'batu'){
        setIsRock(true);
        condition();
    } else if (choice === 'gunting'){
        setIsScissor(true);
        condition();
    } else {
        setIsPaper(true);
        condition();
    }
}

function refresh(){
    console.log('refresh' + logic)
    if (logic == 1){
    disableEnable();
    refreshBoard();
    }   
}
	return (
		<>
        <div className="game-container">
            <div className="player">
                <p className="text-player">PLAYER 1</p>
                <img 
                className={isRock?'img img-clickable player-rock selected':'img img-clickable player-rock'} 
                id='1' 
                onClick={() => decideResult('batu')}
                src={gambarBatu}
                alt="batu.png" 
                width="100"
                />
                <img 
                className={isPaper?'img img-clickable player-paper selected':'img img-clickable player-paper'} 
                id='2' 
                onClick={() => decideResult('kertas')}
                src={gambarKertas}
                alt="kertas.png" 
                width="100"
                />
                <img 
                className={isScissor?'img img-clickable player-scissor selected':'img img-clickable player-scissor'} 
                id='3' 
                onClick={() => decideResult('gunting')}
                src={gambarGunting}
                alt="gunting.png" 
                width="100"/>
            </div>
            <div className="mid-utilities">
                <p id='mid-text'className={changeMidText()}><span className=''>VS</span></p>
                <img 
                className="img img-clickable btn-refresh" 
                id='refresh' 
                onClick={() => refresh()}
                src={ gambarRefresh }
                alt="refresh.png" 
                width="75"/>
            </div>
            <div className="com">
                <p class="text-com">COM</p>
                <img 
                className={isComRock?'img com-rock selected':'img com-rock'} 
                id='1' 
                src={gambarBatu}
                alt="batu.png" 
                width="100"/>
                <img 
                className={isComPaper?'img com-paper selected':'img com-paper'} 
                id='2' 
                src={gambarKertas}
                alt="kertas.png" 
                width="100"/>
                <img 
                className={isComScissor?'img com-scissor selected':'img com-scissor'} 
                id="3" 
                src={gambarGunting}
                alt="gunting.png" 
                width="100"/>
            </div>
        </div>
		</>
	)
}

export default Game
