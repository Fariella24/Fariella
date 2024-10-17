import { View, Image } from 'react-native'
import MyButton from '../componentes/Button'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import Input from "../componentes/Input"
const containerStyle = {

    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

}
const imageContainerStyle = {
    width: 400,
    height: 400,
    backgroundColor: 'purple'

}

function Create() {


    const [img, setImg] = useState(null)
    const [description, setDesciption] = useState('')

    async function openCamera() {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync()

        if (!permissionResult.granted) {
            alert('Dammi i permessi o nonn posso fare nulla')
            return;
        }

        console.log('ABBIAMO I PERMESSI!')

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        const image = result.assets[0].uri
        setImg(image)
    }

    function deleteImage() {

        setImg(null);

    }
    function publishPost() {
        console.log('pubblica!!!')

        const post ={
            name: 'il Papa',
            image: img,
            description:description
        }
        console.log (post)

    }

    return (
        
        <View style={containerStyle}>
            {!img && <MyButton
                title={"Apri Fotocamera"}
                onPress={openCamera}
            />}

            {!!img &&
                <View>
                    <View style={imageContainerStyle}>
                        <Image
                            source={{ uri: img }}
                            style={{
                                width: '100',
                                height: '100%'
                            }} />
                    </View>

                    <MyButton
                        title="Elimina"
                        onPress={deleteImage}
                    />
                    <Input placeholder="Descrizione"
                        onChange={setDesciption}
                    />
                    <MyButton
                        title={"Pubblica"}
                        onPress={publishPost}
                    />
                </View>
            }
        </View>

    )

}
export default Create 