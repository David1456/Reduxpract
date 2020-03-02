import React from "react"
class Actor extends React.Component{
    state={
    
        name:"Pawan Kalyan",
        age:40,
        Industry:"Tollywood"

    };

    changedetails=()=>{
        this.setState({name:"Chiranjeevi",age:56,Industry:"Kollywood"});
    };


    render(){
        return(

            <div><h1 className='text-center'  data-toggle="button" onClick={this.changedetails}>Actors Details </h1><p>Name:{this.state.name}</p>
            <p>Age:{this.state.age}</p><p>Industry:{this.state.Industry}</p>
            <p></p>This is part of class component</div>

        )
    }
}
export default Actor



