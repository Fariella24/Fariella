import { TextInput } from "react-native-web"

function MyInput({ placeholder, password,onChange, value }) {
    return (
        <TextInput
            style={{
                backgroundColor:'purple',
                height: '50px',
                minWhidth: '100px'
            }}
            placeholder={placeholder}
            secureTextEntry={password}
            value={value}
            onChangeText={onChange}
            ></TextInput>
        
    )
} 

export default MyInput