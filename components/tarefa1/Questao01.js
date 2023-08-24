import { useState } from "react"
import {View,Text, StyleSheet, Image, Button} from "react-native"

const Questao01 = () => {
    
    const [imagem, setImagem] = useState('https://www.ahnegao.com.br/wp-content/uploads/2018/06/img-1.jpg')
    
    const mudarImagem = () => {
        if(imagem == 'https://www.ahnegao.com.br/wp-content/uploads/2018/06/img-1.jpg'){
            setImagem('https://img.quizur.com/f/img62bdc4cdb602e2.94441721.png')
        }else{
            setImagem('https://www.ahnegao.com.br/wp-content/uploads/2018/06/img-1.jpg')
        }
    }

    return (
        <View style={styles.text}>
            <Image 
                style={styles.imagem}
                source={
                    {uri: imagem}
                } 
            />
            <Text style={styles.nome}>Bergson Serafim de Souza</Text>
            <Text>Pedra Branca, Ceará</Text>
            <Text style={styles.curso}>Engenharia de Software - 10° Semestre</Text>
            <Button title="Mudar imagem" onPress={mudarImagem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        paddingTop: 50
    },
    nome: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    curso: {
        color: 'red'
    },
    imagem: {
        width: 200,
        height: 200,
    },
  });

export default Questao01