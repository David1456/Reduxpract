import React from "react"
function Basketball(props){
    return(
        <div>
            <h4 className="text-sm" className="btn-secondary">1.Content related to Basketball players</h4>
           
           <ol><li>name:{props.name1}</li>
           <li>id:{props.id1}</li>
           <li>Country:{props.country1}</li></ol>
           <ol><li>name:{props.name2}</li>
           <li>id:{props.id2}</li>
           <li>Country:{props.country2}</li></ol>
           <p>{props.children}</p>

        </div>
    )
}

export default Basketball