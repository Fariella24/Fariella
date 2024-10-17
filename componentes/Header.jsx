import { View, Text } from "react-native";


const userStyle = {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'gray'
}
const infoStyle = {
    disply: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}


function Header() {
    return (
        <View style={{
            backgroundColor: 'orange',
            padding: 6,
            gap:10,
        }}>
            <Text> Nome   </Text>


            <View style={infoStyle}>
                <View style={userStyle}>
                </View>
                <View>
                    <Text> Post   </Text>
                    <Text> 30   </Text>
                </View>
                <View>
                    <Text> Follower   </Text>
                    <Text> 30   </Text>
                </View>
                <View>
                    <Text> Seguiti   </Text>
                    <Text> 30   </Text>
                </View>
            </View>

            <Text> Bio   </Text>
        </View>
    )

}

export default Header

