import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { lessons } from '../data/lessons';
import CodeEditor from '../components/CodeEditor';
import { validateCode, loadProgress, saveProgress } from '../utils/validator';

export default function LessonScreen({ route, navigation }) {
  const { lessonId } = route.params;
  const lesson = lessons.find(l => l.id === lessonId);
  
  const [userCode, setUserCode] = useState(lesson.initialCode || '');
  const [feedback, setFeedback] = useState(null); // null, 'success', ou 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [showTheory, setShowTheory] = useState(true);

  useEffect(() => {
    loadCompletedLessons();
  }, []);

  const loadCompletedLessons = async () => {
    const progress = await loadProgress();
    setCompletedLessons(progress);
  };

  const handleVerifyCode = () => {
    const isValid = validateCode(userCode, lesson.expectedCode);
    
    if (isValid) {
      // Código correto!
      setFeedback('success');
      setFeedbackMessage('🎉 Parabéns! Seu código está correto!');
      
      // Marca lição como completa
      if (!completedLessons.includes(lessonId)) {
        const newCompleted = [...completedLessons, lessonId];
        setCompletedLessons(newCompleted);
        saveProgress(newCompleted);
      }
    } else {
      // Código incorreto
      setFeedback('error');
      setAttempts(attempts + 1);
      
      // Mostra dica após tentativas
      if (attempts >= 2 && lesson.hints && lesson.hints.length > 0) {
        const hintIndex = Math.min(attempts - 2, lesson.hints.length - 1);
        setFeedbackMessage(`❌ Não está correto. Dica: ${lesson.hints[hintIndex]}`);
      } else {
        setFeedbackMessage('❌ Tente novamente! Verifique se incluiu todos os elementos necessários.');
      }
    }
  };

  const handleShowSolution = () => {
    Alert.alert(
      'Ver Solução',
      'Deseja ver uma solução exemplo? Isso não marcará a lição como completa.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Ver Solução',
          onPress: () => {
            // Aqui você pode adicionar soluções exemplo no arquivo lessons.js
            Alert.alert('Solução', 'Confira a teoria novamente e tente incluir todos os elementos mencionados no desafio.');
          },
        },
      ]
    );
  };

  const handleNextLesson = () => {
    const nextLesson = lessons.find(l => l.id === lessonId + 1);
    if (nextLesson) {
      navigation.replace('LessonScreen', { lessonId: nextLesson.id });
    } else {
      Alert.alert(
        '🎊 Parabéns!',
        'Você completou todas as lições! Continue praticando e explorando React Native.',
        [
          { text: 'Voltar ao Início', onPress: () => navigation.navigate('HomeScreen') }
        ]
      );
    }
  };

  const isCompleted = completedLessons.includes(lessonId);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Lição {lesson.id}</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Título da Lição */}
        <View style={styles.lessonHeader}>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
          {isCompleted && (
            <View style={styles.completedBadge}>
              <Text style={styles.completedBadgeText}>✓ Completa</Text>
            </View>
          )}
        </View>

        {/* Toggle Teoria */}
        <TouchableOpacity 
          style={styles.toggleButton}
          onPress={() => setShowTheory(!showTheory)}
        >
          <Text style={styles.toggleButtonText}>
            {showTheory ? '▼' : '►'} Teoria
          </Text>
        </TouchableOpacity>

        {/* Card de Teoria */}
        {showTheory && (
          <View style={styles.theoryCard}>
            <Text style={styles.theoryText}>{lesson.theory}</Text>
          </View>
        )}

        {/* Card do Desafio */}
        <View style={styles.challengeCard}>
          <Text style={styles.challengeTitle}>🎯 Desafio:</Text>
          <Text style={styles.challengeText}>{lesson.challenge}</Text>
        </View>

        {/* Editor de Código */}
        <CodeEditor
          value={userCode}
          onChangeText={setUserCode}
          placeholder="Digite seu código aqui..."
        />

        {/* Feedback */}
        {feedback && (
          <View style={[
            styles.feedbackCard,
            feedback === 'success' ? styles.feedbackSuccess : styles.feedbackError
          ]}>
            <Text style={styles.feedbackText}>{feedbackMessage}</Text>
          </View>
        )}

        {/* Botões de Ação */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.verifyButton}
            onPress={handleVerifyCode}
          >
            <Text style={styles.verifyButtonText}>✓ Verificar Código</Text>
          </TouchableOpacity>

          {attempts >= 3 && (
            <TouchableOpacity
              style={styles.hintButton}
              onPress={handleShowSolution}
            >
              <Text style={styles.hintButtonText}>💡 Ver Dica</Text>
            </TouchableOpacity>
          )}

          {isCompleted && (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNextLesson}
            >
              <Text style={styles.nextButtonText}>
                {lessonId < lessons.length ? 'Próxima Lição →' : 'Finalizar'}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#312c4eff',
  },
  header: {
    backgroundColor: '#16112bff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  backButton: {
    width: 80,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
  },
  lessonHeader: {
    marginTop: 20,
    marginBottom: 15,
  },
  lessonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  completedBadge: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  completedBadgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  toggleButton: {
    backgroundColor: '#3c3349ff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  theoryCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  theoryText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  challengeCard: {
    backgroundColor: '#fff3cd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ffc107',
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 8,
  },
  challengeText: {
    fontSize: 15,
    color: '#856404',
    lineHeight: 22,
  },
  feedbackCard: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    borderWidth: 2,
  },
  feedbackSuccess: {
    backgroundColor: '#d4edda',
    borderColor: '#4caf50',
  },
  feedbackError: {
    backgroundColor: '#f8d7da',
    borderColor: '#d32f2f',
  },
  feedbackText: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
  },
  actionButtons: {
    marginTop: 10,
  },
  verifyButton: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  hintButton: {
    backgroundColor: '#ff9800',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
  },
  hintButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
