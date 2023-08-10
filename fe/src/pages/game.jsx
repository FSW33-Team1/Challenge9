import React, { Component } from 'react'
import {Container} from 'reactstrap'
import {GameView} from '../view/GameView'

class Game extends Component {
    render(){
        return(
            <>
                <GameView/>
            </>
        )
    }
}

export default Game