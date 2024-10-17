import {  View, Image } from "react-native";
const postStyle = {
    width: '33.3%',
    aspectRatio: '1/1',
    backgroundColor: 'orange',
    border: '1px solid red'
}


function Post({ image }) {
    return (
        <View style={postStyle}>
            <Image
                source={{ uri:image}}
                style={{
                    width: '100%',
                    height: '100%'
                }}/>


        </View>

    )
}
export default Post