import { Switch, Route } from 'react-router-dom'


import SignIn from '../pages/Signin'


const Routes: React.FC = () => {
    return (

        <Switch >
            <Route path="/" exact component={SignIn} />
        </Switch>
    )
}
export default Routes