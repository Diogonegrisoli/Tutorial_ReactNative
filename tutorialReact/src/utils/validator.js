// Função que valida o código do usuário
// Verifica se todos os padrões esperados estão presentes no código

export function validateCode(userCode, expectedPatterns) {
  if (!userCode || !expectedPatterns) {
    return false;
  }

  // Remove espaços extras e normaliza o código para facilitar validação
  const normalizedCode = userCode.trim().toLowerCase();

  // Verifica se TODOS os padrões esperados estão presentes no código
  return expectedPatterns.every(pattern => {
    const normalizedPattern = pattern.toLowerCase();
    return normalizedCode.includes(normalizedPattern);
  });
}

// Importa AsyncStorage no topo do arquivo
import AsyncStorage from '@react-native-async-storage/async-storage';

// Função auxiliar para salvar progresso
export async function saveProgress(completedLessons) {
  try {
    await AsyncStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    console.log('Progresso salvo:', completedLessons);
    return true;
  } catch (error) {
    console.error('Erro ao salvar progresso:', error);
    return false;
  }
}

// Função auxiliar para carregar progresso
export async function loadProgress() {
  try {
    const data = await AsyncStorage.getItem('completedLessons');
    const progress = data ? JSON.parse(data) : [];
    console.log('Progresso carregado:', progress);
    return progress;
  } catch (error) {
    console.error('Erro ao carregar progresso:', error);
    return [];
  }
}

// Função para resetar progresso
export async function resetProgress() {
  try {
    await AsyncStorage.removeItem('completedLessons');
    console.log('Progresso resetado com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao resetar progresso:', error);
    return false;
  }
}
