import { Route } from "react-router-dom";

const Welcome = () => {
    return ( 
        <div className="welcome"> 
            <h2>Welcome</h2>
            <Route path="/welcome/grid"> 
            </Route>
        </div>
     )
}

export default Welcome;