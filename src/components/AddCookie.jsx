import React, { Component } from 'react'

class AddCookie extends Component{
    
    render(){
        return(        
            <div>
              {this.props.clicker >= this.props.level ?
                <div>
                    <div className={this.props.class} onClick={()=>this.props.upgrade(this.props.id)}></div>
                    <div className="price">{this.props.level} cookies </div>
                </div>
                    :
                    <p></p>
                }
            </div>

        )
        
    }
}

export default AddCookie