import { ScrollView, Text } from "react-native";
import Container from "../componentes/Container";
import HomePost from "../componentes/HomePost";
import { useSessionContext } from "../utils/context";


function Home() {

    const value = useSessionContext()

    return (

        <ScrollView>
            <Container>
                <Text>HOME SCREEN</Text>

                {value.posts.map((post, i) => (
                    <HomePost
                        key={i}
                        nome={post.nome}
                        image={post.image}
                        description={post.description}
                    />

                ))}



            </Container>

        </ScrollView>


    )
}
export default Home
