import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native-web';

const students = [
  { id: 'stu1', name: 'Alice Johnson', major: 'Computer Science' },
  { id: 'stu2', name: 'Bob Smith', major: 'Mathematics' },
  { id: 'stu3', name: 'Charlie Davis', major: 'Physics' },
  { id: 'stu4', name: 'Diana Ross', major: 'English Literature' }
];

export default function Students() {

   const emitEvent = (eventName) => {
    fetch('http://localhost:1002/producer/api/students', {
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
      emitEvent('students-event');
      // console.log('Server handled event with data:', data);
    }
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Students</Text>
      {students.length === 0 ? (
        <Text style={styles.emptyText}>No students found.</Text>
      ) : (
        students.map(({ id, name, major }) => (
          <View key={id} style={styles.studentCard}>
            <Text style={styles.studentName}>{name}</Text>
            <Text style={styles.studentMajor}>{major}</Text>
            <Button onPress = {handleByServer} title='Students.. '/>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 20,
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
  studentCard: {
    padding: 14,
    marginBottom: 14,
    borderRadius: 6,
    backgroundColor: '#d1e7dd',
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.04)'
  },
  studentName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f5132'
  },
  studentMajor: {
    fontSize: 15,
    color: '#195c40',
    marginTop: 4
  },
  emptyText: {
    fontSize: 18,
    color: '#6c757d',
    textAlign: 'center'
  }
});
