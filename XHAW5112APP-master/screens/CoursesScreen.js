import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function CoursesScreen() {
  const courses = ['First Aid', 'Sewing', 'Cooking', 'Landscape', 'Child Care'];
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Available Courses</Text>
      {courses.map((course, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.courseName}>{course}</Text>
          <Text style={styles.courseText}>
            Learn {course.toLowerCase()} and gain valuable skills for your career and community.
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const COLORS = { primary: '#FFD500', text: '#000', background: '#FFF' };

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, padding: 15 },
  header: { fontSize: 24, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  card: {
    backgroundColor: COLORS.background,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  courseName: { fontWeight: 'bold', fontSize: 18, color: COLORS.text },
  courseText: { color: COLORS.text, marginTop: 5 },
});
