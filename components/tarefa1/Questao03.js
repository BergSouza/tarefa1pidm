import {View, Text} from 'react-native';

const Questao03 = ({cor}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>Disciplinas</Text>
            <Text style={{color: cor}}>Fundamentos de Programação</Text>
            <Text style={{color: cor}}>Introdução ao Desenvolvimento de Jogos</Text>
            <Text style={{color: cor}}>Desenvolvimento de Software para Web</Text>
            <Text style={{color: cor}}>Probabilidade e Estatística</Text>
        </View>
    )
}

export default Questao03