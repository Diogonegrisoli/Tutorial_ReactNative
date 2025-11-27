import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { lessons } from '../data/lessons';
import ProgressBar from '../components/ProgressBar';
import { loadProgress, resetProgress } from '../utils/validator';

export default function HomeScreen({ navigation }) {
    const [completedLessons, setCompletedLessons] = useState([]);

    // Carrega o progresso salvo quando o componente monta
    useEffect(() => {
        loadSavedProgress();
    }, []);

    // Recarrega o progresso quando a tela volta ao foco
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            loadSavedProgress();
        });
        return unsubscribe;
    }, [navigation]);

    const loadSavedProgress = async () => {
        const progress = await loadProgress();
        setCompletedLessons(progress);
    };

    const handleResetProgress = async () => {
        console.log('Iniciando reset do progresso');

        const success = await resetProgress();
        console.log('resetProgress retornou:', success);

        if (success) {
            // Limpa o estado
            setCompletedLessons([]);

            // Recarrega o progresso (vai pegar array vazio)
            await loadSavedProgress();

            console.log('PROGRESSO RESETADO COM SUCESSO!');
        } else {
            console.log('Falha ao resetar progresso');
        }
    };

    const isLessonCompleted = (lessonId) => {
        return completedLessons.includes(lessonId);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.titulo}>BIG FACE TUTORIALS</Text>
                <Text style={styles.subtitulo}>React Native Interativo</Text>
            </View>

            <ScrollView style={styles.scrollView}>
                {/* Barra de Progresso */}
                <ProgressBar current={completedLessons.length} total={lessons.length} />

                {/* Lista de Lições */}
                <View style={styles.lessonsList}>
                    <Text style={styles.sectionTitle}>📚 Lições Disponíveis</Text>

                    {lessons.map((lesson) => {
                        const completed = isLessonCompleted(lesson.id);
                        return (
                            <TouchableOpacity
                                key={lesson.id}
                                style={[
                                    styles.lessonCard,
                                    completed && styles.lessonCardCompleted
                                ]}
                                onPress={() => navigation.navigate('LessonScreen', { lessonId: lesson.id })}
                            >
                                <View style={styles.lessonCardHeader}>
                                    <View style={styles.lessonNumber}>
                                        <Text style={styles.lessonNumberText}>{lesson.id}</Text>
                                    </View>
                                    <View style={styles.lessonInfo}>
                                        <Text style={styles.lessonTitle}>{lesson.title}</Text>
                                        {completed && (
                                            <View style={styles.completedBadge}>
                                                <Text style={styles.completedBadgeText}>✓ Completa</Text>
                                            </View>
                                        )}
                                    </View>
                                </View>
                                <Text style={styles.lessonChallenge} numberOfLines={2}>
                                    {lesson.challenge}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* Botão de Reset (Opcional) */}
                {completedLessons.length > 0 && (
                    <TouchableOpacity
                        style={styles.resetButton}
                        onPress={handleResetProgress}
                    >
                        <Text style={styles.resetButtonText}>🔄 Resetar Progresso</Text>
                    </TouchableOpacity>
                )}

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
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    titulo: {
        fontSize: 26,
        fontWeight: '600',
        color: '#ffffff',
    },
    subtitulo: {
        fontSize: 14,
        color: '#cccbcbff',
        marginTop: 5,
    },
    scrollView: {
        flex: 1,
    },
    lessonsList: {
        paddingHorizontal: 15,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 15,
    },
    lessonCard: {
        backgroundColor: '#3c3349ff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#fff',
    },
    lessonCardCompleted: {
        backgroundColor: '#2d5016',
        borderColor: '#4caf50',
    },
    lessonCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    lessonNumber: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#16112bff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    lessonNumberText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    lessonInfo: {
        flex: 1,
    },
    lessonTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    completedBadge: {
        backgroundColor: '#4caf50',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginTop: 5,
        alignSelf: 'flex-start',
    },
    completedBadgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    lessonChallenge: {
        fontSize: 14,
        color: '#cccbcbff',
        fontStyle: 'italic',
    },
    resetButton: {
        backgroundColor: '#d32f2f',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 20,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    resetButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
