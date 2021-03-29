import React from 'react'
import './Card.css'
export default class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="card">
                <div className="card-logo">
                    <img src={this.props.foto} width='100' />
                </div>
                <div className="card-content">
                  <h1>{this.props.nombre}</h1>  
                  <p>{this.props.precio}</p>
                </div>
            </div>
        )
    }
}