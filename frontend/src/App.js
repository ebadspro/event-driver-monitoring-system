import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Students from './pages/Students';
import Services from './pages/Services';
import globalStyles from './styles/globalStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationBar />
      <View style={styles.content}>
        <Routes>
          <Route path="/producer/api" element={<Home />} />
          <Route path="/producer/api/course" element={<Courses />} />
          <Route path="/producer/api/students" element={<Students />} />
          <Route path="/producer/api/services" element={<Services />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    flex: 1,
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    flexDirection: 'column',
  },
  content: {
    ...globalStyles.container,
    flex: 1,
    padding: 20,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
});
