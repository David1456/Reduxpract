import React from "react"
function Cricket(props){
    return(
        <div>
            <h4 className="btn-success">2.Cricket players realted content</h4>
            <ol>
                <li>id:{props.id1}</li>
                <li>Name:{props.name1}</li>
                <li>Country:{props.country}</li>
            </ol>

            <ol>
                <li>id:{props.id2}</li>
                <li>Name:{props.name2}</li>
                <li>Country:{props.country2}</li>
            </ol>



        </div>
    )
}

export default Cricket