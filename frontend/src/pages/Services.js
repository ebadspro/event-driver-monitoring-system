import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native-web';

const services = [
  {
    id: 'serv1',
    name: 'Academic Advising',
    details: 'Get guidance on course selections and career paths.'
  },
  {
    id: 'serv2',
    name: 'Library Services',
    details: 'Access to books, journals, and research databases.'
  },
  {
    id: 'serv3',
    name: 'Counseling',
    details: 'Professional support for personal and academic challenges.'
  },
  {
    id: 'serv4',
    name: 'Tutoring',
    details: 'Additional help with coursework and exam preparation.'
  }
];

export default function Services() {

   const emitEvent = (eventName) => {
    fetch('http://localhost:1002/producer/api/services', {
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
      emitEvent('services-event');
      // document.writeln('Server handled event with data:', data);
    }
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Academic Services</Text>
      {services.length === 0 ? (
        <Text style={styles.emptyText}>No services currently available.</Text>
      ) : (
        services.map(({ id, name, details }) => (
          <View key={id} style={styles.serviceCard}>
            <Text style={styles.serviceName}>{name}</Text>
            <Text style={styles.serviceDetails}>{details}</Text>
            <Button onPress={handleByServer} title="Learn More" />
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#212529',
    textAlign: 'center'
  },
  serviceCard: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 6,
    backgroundColor: '#f8d7da',
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.03)'
  },
  serviceName: {
    fontSize: 19,
    fontWeight: '600',
    color: '#842029'
  },
  serviceDetails: {
    fontSize: 15,
    color: '#a71d2a',
    marginTop: 6,
    lineHeight: 22
  },
  emptyText: {
    fontSize: 18,
    color: '#6c757d',
    textAlign: 'center'
  }
});
