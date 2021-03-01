import React from 'react'
import './App.css';
import AddCookie from './components/AddCookie'
import Bonus from './components/Bonus'


export class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
    levels :
    [
        {id: 0, name:"level1", price:10, func:this.level1, class:"level level1", pc:2},
        {id: 1, name:"level2", price:20, func:this.level1, class:"level level2", pc:15},
        {id: 2, name:"level3", price:500, func:this.lvlPSec, class:"level level3", pc:20}
    ],
            valeurClick: 1,
            clicks: 0,
            pcPerSecond: 0,
            inflation: 1.15,
        };
    }

    clicked = () => {
        this.setState({
            clicks: this.state.clicks + this.state.valeurClick
        })
    }

    level1 = (id) => {
        this.setState({
            clicks: this.state.clicks -= this.state.levels[id].price,
            valeurClick: this.state.valeurClick += this.state.levels[id].pc,
            prixLevel: this.state.levels[id].price = Math.round(this.state.levels[id].price * this.state.inflation)
        })
    }
    
    lvlPSec = (id) => {
        this.setState({
            clicks: this.state.clicks -= this.state.levels[id].price,
            pcPerSecond: this.state.pcPerSecond += this.state.levels[id].pc,
            prixLevel: this.state.levels[id].price = Math.round(this.state.levels[id].price * this.state.inflation)
        })
    }

       masterInterval = setInterval(() => {
          this.setState((state) =>{
              return {
                  clicks: this.state.clicks += this.state.pcPerSecond
              }
          }) 
       },1000)

       
    

    render(){

        const listCookieLevel = this.state.levels.map((level)=>(
            <AddCookie 
                id={level.id}
                key={level.id}
                upgrade={level.func} 
                clicker={this.state.clicks}
                level={level.price}
                class={level.class}
            />
        ))
        return (
            <div className="main">
            <div className="display">
                <div className="shop shopTitle">SHOP
                <div className="box">
                    <div className="small-container">
                    {listCookieLevel}
                    </div>
                </div>

                </div>
                <div className="container-middle">
                    
                <div className="totalCookie">
                    <button onClick={this.clicked} className="cookie"><strong>Click on me!</strong></button>
                </div>
                </div>
                    <div className="displayCookie"><div className="number">Number of cookies {this.state.clicks} </div></div>
                    <Bonus clicker={this.state.clicks} />
                </div>
                </div>
        )
    }
        
}

export default App