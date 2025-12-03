import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
import { NavLink } from 'react-router-dom';
import globalStyles from '../styles/globalStyles';

const links = [
  { to: '/producer/api/home', label: 'Home' },
  { to: '/producer/api/course', label: 'Courses' },
  { to: '/producer/api/students', label: 'Students' },
  { to: '/producer/api/services', label: 'Services' }
];

export default function NavigationBar() {
  return (
    <View style={styles.navbar}>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {})
          })}
          aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        >
          <Text style={styles.linkText}>{label}</Text>
        </NavLink>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    flexWrap: 'wrap'
  },
  link: {
    textDecorationLine: 'none',
    color: '#cce5ff',
    fontWeight: '600',
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    transitionDuration: '200ms',
    transitionProperty: 'background-color',
    transitionTimingFunction: 'ease-in-out',
    userSelect: 'none'
  },
  activeLink: {
    backgroundColor: '#0056b3',
    color: '#ffffff'
  },
  linkText: {
    color: 'inherit',
    fontWeight: 'inherit',
    fontSize: 'inherit'
  }
});
