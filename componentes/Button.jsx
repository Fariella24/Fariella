import { Button } from "react-native-web";


function MyButton ({onPress,title}){
    return (
        <Button
         title={title}
         color='green'
         fontfamily ='Comic Sans MS, cursive'
         onPress={onPress}
         style={{ fontFamily: 'Comic Sans MS, cursive' }}
         />
        
    )
}

export default MyButton