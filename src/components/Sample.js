import {useLocation} from "react-router-dom"

const Sample=()=>{
    const location = useLocation()
    console.log(location.state.data)
    return (
        <div > 
        <h1>{location.state.data.name}</h1>
        <p>Issue-{location.state.data.issue}</p>
        <textarea rows="20" col="30"/>
        </div>
    )

}
export default Sample 