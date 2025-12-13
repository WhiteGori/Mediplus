import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import * as Res from '../resources';

export const Profile = () => {
  const user = useSelector(state => state.auth.user);

  if (!user) {
    return (
      <View style={styles.background}>
        <Text>No hay usuario logueado</Text>
      </View>
    );
  }

  const getAge = birthDate => {
    if (!birthDate) return '—';

    const birth = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <View style={styles.background}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user.firstName?.[0]}
            {user.lastName?.[0]}
          </Text>
        </View>

        <Text style={styles.name}>
          {`${user.firstName ?? ''} ${user.lastName ?? ''}`}
        </Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <ProfileRow label="Correo electrónico" value={user.email} />
        <ProfileRow label="Fecha de nacimiento" value={user.birthDate ?? '—'} />
        <ProfileRow label="DNI" value={user.dni ?? '—'} />
        <ProfileRow label="Edad" value={getAge(user.birthDate)} />
        <ProfileRow label="Dirección" value={user.address ?? '—'} />
      </View>
    </View>
  );
};

/* ========================= */
/* COMPONENTE FILA */
/* ========================= */

const ProfileRow = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

/* ========================= */
/* STYLES */
/* ========================= */

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
    padding: 20,
  },

  /* HEADER */
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: Res.COMPONENT_COLOR.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  avatarText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },

  /* CARD */
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 3,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  label: {
    fontSize: 14,
    color: '#666',
  },

  value: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    maxWidth: '60%',
    textAlign: 'right',
  },
});
