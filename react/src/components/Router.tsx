import React from "react"
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom"
import About from './About'
import Begin from './Begin'
import Finish from './Finish'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <About/>
                </Route>
                <Route path="/begin">
                    <Begin/>
                </Route>
                <Route path="/finish">
                    <Finish/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
