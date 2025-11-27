# 📱 Big Face Tutorials - React Native Interativo

App educacional estilo FreeCodeCamp para aprender React Native de forma interativa.

## 🎯 Funcionalidades

- ✅ 5 lições interativas sobre React Native
- ✅ Editor de código integrado
- ✅ Sistema de validação automática
- ✅ Feedback visual (certo/errado)
- ✅ Sistema de dicas após tentativas
- ✅ Barra de progresso
- ✅ Persistência de progresso com AsyncStorage
- ✅ Navegação entre lições

## 📚 Lições Disponíveis

1. **Componentes Básicos** - View, Text, Button
2. **StyleSheet** - Estilização de componentes
3. **Navegação entre Telas** - React Navigation
4. **useState Hook** - Gerenciamento de estado
5. **useEffect Hook** - Efeitos colaterais

## 🚀 Como Usar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Instalar AsyncStorage (IMPORTANTE!)

**Observação:** Se você encontrou erro ao instalar via npm (por política de execução do PowerShell), tente uma das opções abaixo:

**Opção 1 - Usando o comando do Expo:**
```bash
expo install @react-native-async-storage/async-storage
```

**Opção 2 - Adicionar manualmente ao package.json:**
Adicione ao arquivo `package.json` na seção `dependencies`:
```json
"@react-native-async-storage/async-storage": "1.23.1"
```
E depois execute:
```bash
npm install
```

### 3. Iniciar o App

```bash
npm start
```

ou

```bash
expo start
```

## 📂 Estrutura do Projeto

```
/src
  /screens
    - TelaInicial.jsx       # Tela inicial do app
    - Selecao.jsx          # Seleção de módulos
    - HomeScreen.js        # Lista de lições interativas (NOVO!)
    - LessonScreen.js      # Tela de lição com editor (NOVO!)
    - Introducao.jsx       # Lição teórica 1
    - ComponentesBasicos.jsx # Lição teórica 2
    - Estilizacao.jsx      # Lição teórica 3
    - Navegacao.jsx        # Lição teórica 4
    - Hooks.jsx            # Lição teórica 5
  /data
    - lessons.js           # Todas as lições interativas
  /components
    - CodeEditor.js        # Editor de código estilizado
    - ProgressBar.js       # Barra de progresso visual
  /utils
    - validator.js         # Validação de código e persistência
```

## 🎮 Como Funciona

### Fluxo do Sistema Interativo:

1. **Escolher Lição**: Na tela inicial, veja todas as lições disponíveis
2. **Ler Teoria**: Cada lição tem uma explicação teórica detalhada
3. **Ver Desafio**: Descrição do que você precisa implementar
4. **Escrever Código**: Use o editor integrado para digitar seu código
5. **Verificar**: Clique em "Verificar Código" para validar
6. **Feedback**: 
   - ✅ **Correto**: Mensagem verde + lição marcada como completa
   - ❌ **Errado**: Mensagem vermelha + dica após 3 tentativas
7. **Próxima Lição**: Após completar, avance para a próxima

### Sistema de Validação:

O código é validado verificando se contém todos os elementos necessários:
- Para "Componentes Básicos": deve conter `<View>`, `<Text>`, `<Button`, `title=`
- Para "StyleSheet": deve conter `StyleSheet.create`, `backgroundColor`, `padding`
- E assim por diante...

### Persistência:

- Seu progresso é salvo automaticamente no dispositivo
- Mesmo fechando o app, suas lições completas permanecem marcadas
- Use o botão "Resetar Progresso" para começar do zero

## 🎨 Características do Design

- **Tema Dark**: Interface moderna com cores confortáveis
- **Editor Monospace**: Fonte de código adequada para programação
- **Feedback Visual**: Cores claras (verde=sucesso, vermelho=erro, amarelo=desafio)
- **Cards Informativos**: Separação clara entre teoria, desafio e código
- **Barra de Progresso**: Visualização do avanço nas lições

## 🔧 Tecnologias Utilizadas

- React Native
- Expo
- React Navigation (navegação entre telas)
- AsyncStorage (persistência local)
- StyleSheet (estilização)

## 📝 Notas Importantes

1. **AsyncStorage é obrigatório** para salvar progresso. Sem ele, o app funcionará mas não salvará o progresso.
2. As lições teóricas antigas (Introducao, ComponentesBasicos, etc.) ainda estão disponíveis na tela Selecao
3. O novo **Sistema Interativo** é acessado pelo botão azul na tela Selecao
4. A validação é case-insensitive (não diferencia maiúsculas/minúsculas)

## 🎁 Recursos Extras Implementados

- ✅ Sistema de dicas progressivas
- ✅ Botão de resetar progresso
- ✅ Contador de tentativas
- ✅ Toggle para mostrar/ocultar teoria
- ✅ Navegação fluida entre lições
- ✅ Mensagem de conclusão ao finalizar todas as lições

## 🐛 Solução de Problemas

### Erro ao instalar AsyncStorage
Se você ver o erro sobre execução de scripts desabilitada:
1. Tente usar `expo install` em vez de `npm install`
2. Ou adicione manualmente ao package.json e rode `npm install`

### App não salva progresso
Verifique se o AsyncStorage foi instalado corretamente executando:
```bash
npm list @react-native-async-storage/async-storage
```

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido como material didático acadêmico, focando em:
- Código simples e legível
- Comentários explicativos
- Estrutura organizada
- Experiência de aprendizado interativa

## 📖 Para Estudantes

O código foi escrito de forma didática. Explore:
- Como funciona a navegação no `App.js`
- A estrutura de dados das lições em `lessons.js`
- A lógica de validação em `validator.js`
- Os componentes reutilizáveis em `/components`

Bons estudos! 🚀
