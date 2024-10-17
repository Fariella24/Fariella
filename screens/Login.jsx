import { Text } from "react-native-web";
import Container from "../componentes/Container";
import MyInput from "../componentes/Input";
import MyButton from "../componentes/Button";
import {useState} from "react"
//const username = "FARIELLA"
//const password = "BALANGO"

function Login() {
    const [username, setUsername] = useState()

    const [password, setPassword] = useState()
    function onLogin() {

        console.log('-FARIELLA:  ', username)
        console.log('-BALANGO:  ', password)

    }
    function onPasswordChange(text) {
        setUsername(text)
    }
    function onUsernameChange(text) {
        setPassword(text)
    }
    return (
        <Container>
            <Text>ISTATRANS</Text>
            <MyInput placeholder="username"
                //value={username}
                onChange={onUsernameChange}

            />
            <MyInput placeholder="password"
                password={true}
                //value={password}
                onChange={onPasswordChange}
            />


            <MyButton onPress={onLogin} title={'ACCEDI'} />
        </Container>

    );
}
export default Login
