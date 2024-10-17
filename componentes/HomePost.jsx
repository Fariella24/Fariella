import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { useState } from "react";
import { Ionicons } from 'react-native-vector-icons'


const containerStyle = {
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'white'
}
const ImageStyle = {
    width: '100%',
    aspectRatio: '1/1',
    backgroundColor: 'yellow'
}
const ProfileStyle = {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'blue',
    overflow: 'hidden'
}
const ProfileContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 3

}
const descriptionStyle =
{
    margin: 5,
    marginBottom: 15
}
function HomePost({nome, description, image
}) {
    const [like, setLike] = useState(false)
    function toggleLike() {
        setLike(like ? false : true)
    }

    return (
        <View style={containerStyle}>
            <View style={ProfileContainerStyle}>
                <View style={ProfileStyle}>
                    <Image
                        source={{ uri: "https://th.bing.com/th/id/R.eec3a03f1f56e71eca9c594a30b74f65?rik=v1wm2R6o1U3SBg&pid=ImgRaw&r=0" }}
                        style={{
                            width: '100%',
                            height: '100%'
                        }} />
                </View>
                <Text>{nome}</Text>
            </View>

            <View style={ImageStyle} >
                <Image
                    source={{ uri: image }}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />

            </View>
            <View>
                <TouchableOpacity onPress={toggleLike}>
                    <Ionicons
                        name={like ? 'heart' : 'heart-outline'}
                        size={40}
                        color={like ? 'red' : 'gray'}
                    />
                </TouchableOpacity>
                <View style={descriptionStyle}>
                    <Text>{description}</Text>


                </View>

            </View>
        </View>

    )
}
export default HomePost