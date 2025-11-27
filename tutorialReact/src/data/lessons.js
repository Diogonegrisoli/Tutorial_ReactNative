// Arquivo com todas as lições do app estilo FreeCodeCamp
export const lessons = [
  {
    id: 1,
    title: "Componentes Básicos",
    theory: `# Componentes Básicos do React Native

React Native possui componentes fundamentais para construir interfaces:

**View**: Container básico que suporta layout com flexbox, estilo, toque e controles de acessibilidade.

**Text**: Componente para exibir texto. Suporta aninhamento, estilização e toque.

**Button**: Botão básico que aceita um título e uma função onPress.

## Exemplo:
\`\`\`jsx
import { View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Olá Mundo!</Text>
      <Button title="Clique Aqui" onPress={() => alert('Clicou!')} />
    </View>
  );
}
\`\`\`

Os componentes são importados do 'react-native' e compostos para criar a interface.`,
    challenge: "Crie um View contendo um Text que mostre seu nome e um Button com o título 'Clique Aqui'",
    expectedCode: ["<View>", "<Text>", "<Button", "title="],
    hints: [
      "Lembre-se de importar View, Text e Button de 'react-native'",
      "O Button precisa da propriedade 'title' para funcionar",
      "Todos os elementos devem estar dentro de um <View> principal"
    ],
    initialCode: `import { View, Text, Button } from 'react-native';

export default function App() {
  return (
    // Seu código aqui
    
  );
}`
  },
  {
    id: 2,
    title: "StyleSheet",
    theory: `# Estilização com StyleSheet

StyleSheet é uma abstração similar ao CSS para estilizar componentes no React Native.

**Por que usar StyleSheet.create()?**
- Validação de propriedades
- Melhor performance (estilos são criados uma vez)
- Código mais organizado

## Propriedades Comuns:
- \`backgroundColor\`: Cor de fundo
- \`padding\`: Espaçamento interno
- \`margin\`: Espaçamento externo
- \`fontSize\`: Tamanho da fonte
- \`color\`: Cor do texto
- \`flex\`: Sistema de layout flexível

## Exemplo:
\`\`\`jsx
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    color: 'white',
    fontSize: 18
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá!</Text>
    </View>
  );
}
\`\`\``,
    challenge: "Crie um StyleSheet com um estilo 'container' que tenha backgroundColor azul (blue) e padding de 20",
    expectedCode: ["StyleSheet.create", "container:", "backgroundColor", "padding"],
    hints: [
      "Use StyleSheet.create({ ... }) para criar os estilos",
      "Dentro de container, defina backgroundColor: 'blue'",
      "Adicione padding: 20 (número, sem aspas)"
    ],
    initialCode: `import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Crie o estilo 'container' aqui
  
});

export default function App() {
  return <View style={styles.container} />;
}`
  },
  {
    id: 3,
    title: "Navegação entre Telas",
    theory: `# Navegação no React Native

Para navegar entre telas, usamos o React Navigation. O componente recebe uma prop 'navigation' que permite navegar.

**Método principal:**
\`navigation.navigate('NomeDaTela')\`

## Como funciona:
1. Cada tela é registrada no Stack.Navigator (no App.js)
2. As telas recebem a prop 'navigation'
3. Use navigation.navigate() para ir para outra tela
4. Use navigation.goBack() para voltar

## Exemplo:
\`\`\`jsx
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
\`\`\`

O botão acima leva para uma tela chamada 'Details' quando clicado.`,
    challenge: "Adicione um Button que navegue para uma tela chamada 'Details' quando clicado",
    expectedCode: ["<Button", "navigation.navigate", "Details"],
    hints: [
      "Use a prop navigation que vem como parâmetro da função",
      "O onPress do Button deve chamar navigation.navigate()",
      "O nome da tela deve estar entre aspas: 'Details' ou \"Details\""
    ],
    initialCode: `import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      {/* Adicione o Button aqui */}
      
    </View>
  );
}`
  },
  {
    id: 4,
    title: "useState Hook",
    theory: `# useState - Gerenciando Estado

useState é um Hook que permite adicionar estado a componentes funcionais.

**Sintaxe:**
\`const [valor, setValor] = useState(valorInicial);\`

- \`valor\`: variável que guarda o estado atual
- \`setValor\`: função para atualizar o estado
- \`valorInicial\`: valor inicial do estado

## Como funciona:
1. Importar useState do React
2. Declarar o estado com useState
3. Usar a função set para atualizar
4. O componente re-renderiza quando o estado muda

## Exemplo:
\`\`\`jsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {
  const [contador, setContador] = useState(0);
  
  return (
    <View>
      <Text>Contagem: {contador}</Text>
      <Button
        title="Aumentar"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
}
\`\`\`

Cada clique no botão aumenta o contador em 1.`,
    challenge: "Crie um estado chamado 'contador' iniciando em 0 e um botão que aumente esse valor ao ser clicado",
    expectedCode: ["useState", "contador", "set", "onPress"],
    hints: [
      "Use const [contador, setContador] = useState(0)",
      "No onPress do Button, chame a função set do estado",
      "Para aumentar: setContador(contador + 1)"
    ],
    initialCode: `import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {
  // Declare o estado aqui
  
  return (
    <View>
      <Text>Contagem: {/* mostre o contador aqui */}</Text>
      {/* Adicione o Button aqui */}
      
    </View>
  );
}`
  },
  {
    id: 5,
    title: "useEffect Hook",
    theory: `# useEffect - Efeitos Colaterais

useEffect permite executar código em momentos específicos do ciclo de vida do componente.

**Sintaxe:**
\`useEffect(() => { /* código */ }, [dependências]);\`

## Quando executa:
- **Array vazio []**: Executa apenas quando o componente monta (aparece na tela)
- **Com dependências [valor]**: Executa quando 'valor' muda
- **Sem array**: Executa em toda renderização (evite!)

## Usos comuns:
- Buscar dados de uma API
- Configurar listeners
- Logs de debug
- Timers e intervalos

## Exemplo:
\`\`\`jsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function App() {
  const [mensagem, setMensagem] = useState('Carregando...');
  
  useEffect(() => {
    console.log('Componente montado!');
    setMensagem('Pronto!');
  }, []); // Array vazio = executa 1 vez
  
  return (
    <View>
      <Text>{mensagem}</Text>
    </View>
  );
}
\`\`\``,
    challenge: "Use useEffect para mostrar um console.log('Componente carregado') quando o componente carregar pela primeira vez",
    expectedCode: ["useEffect", "console.log", "[]"],
    hints: [
      "Importe useEffect do React",
      "Use useEffect(() => { ... }, [])",
      "Coloque console.log dentro da função do useEffect",
      "O array vazio [] garante que executa só uma vez"
    ],
    initialCode: `import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function App() {
  // Adicione o useEffect aqui
  
  return (
    <View>
      <Text>Olá Mundo!</Text>
    </View>
  );
}`
  }
];
