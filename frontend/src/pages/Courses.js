import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native-web';

const courses = [
  {
    id: 'course1',
    title: 'Introduction to Computer Science',
    description: 'Learn the basics of algorithms, data structures, and programming.'
  },
  {
    id: 'course2',
    title: 'Calculus I',
    description: 'Fundamentals of differential and integral calculus.'
  },
  {
    id: 'course3',
    title: 'English Literature',
    description: 'Explore classical and modern works of English literature.'
  },
  {
    id: 'course4',
    title: 'Physics: Mechanics',
    description: 'Study the principles of motion, forces, and energy.'
  }
];

export default function Courses() {
  
  
  const emitEvent = (eventName) => {
    fetch('http://localhost:1002/producer/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ event: eventName }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log('Event emitted successfully:', data);
      })
      .catch(error => {
        console.log('Error emitting event:', error);
      })       
    ;
    }

    const handleByServer = (data) => {
      emitEvent('ViewCourse');
      // document.writeln('Server handled event with data:', data);
    }
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Courses</Text>
      {courses.length === 0 ? (
        <Text style={styles.emptyText}>No courses available at the moment.</Text>
      ) : (
        courses.map(({ id, title, description }) => (
          <View key={id} style={styles.courseCard}>
            <Text style={styles.courseTitle}>{title}</Text>
            <Text style={styles.courseDescription}>{description}</Text>
            <Button onPress={handleByServer} title="View Course" />
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#212529',
    textAlign: 'center'
  },
  courseCard: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#e9f0f7',
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.05)'
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
    color: '#0a3d62'
  },
  courseDescription: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 22
  },
  emptyText: {
    fontSize: 18,
    color: '#6c757d',
    textAlign: 'center'
  }
});
