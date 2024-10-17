import { View } from "react-native";
import Container from "../componentes/Container";
import Header from "../componentes/Header";
import Post from "../componentes/Post"

const containerStyle = {
    backgroundColor: 'red',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',

}

function Profilo() {
    return (

        <Container>
            <Header />
            <View style={containerStyle}>
                <Post image={"https://www.bing.com/images/search?view=detailV2&insightstoken=bcid_qKLIvPPxAJ8HEQ*ccid_osi88%2FEA&form=ANCMS1&iss=SBIUPLOADGET&selectedindex=0&id=885489108&ccid=osi88%2FEA&exph=600&expw=472&vt=2&sim=11"} />



            </View>




        </Container>
    )

}
export default Profilo