import React, { Component } from 'react'
import {Container} from 'reactstrap'
import {GameListView} from '../view/GameListView'


class GameList extends Component {
    render(){
        return(
            <>
                <GameListView/>       
            </>
        )
    }
}

export default GameList