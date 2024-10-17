import { View } from "react-native"

function Container({children}) { 
    return (
        <View style={{
            backgroundColor: 'white',
            minHeight: 200,
            margin: 30,
            padding: 10,
            alignItems:'center'    
                 
            
        }}>
                {children}
        </View>
    )
}

export default Container

