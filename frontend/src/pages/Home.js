import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';


export default function Home() {
  
  const emitEvent = (eventName) => {
    fetch('http://localhost:1002/producer/api/home-event', {
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
      });
    };
      
    const handleByServer = () => {
      emitEvent('home-event');
      // document.writeln('Server handled event with data:', data);
    }
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Academic Web Application</Text>
      <Text style={styles.description}>
        Explore courses, students, and academic services offered by our institution.
        Navigate through the links above to learn more.
      </Text>
      <button onClick={handleByServer} style={{ marginTop: 20, padding: 10, backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}>
        Get Started
      </button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: '#212529',
    textAlign: 'center'
  },
  description: {
    fontSize: 18,
    color: '#495057',
    lineHeight: 26,
    textAlign: 'center'
  }
});
