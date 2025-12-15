import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { startAlarm } from '../Redux/alarmSlice';

export const Timer = ({ times = [], style, medicationName }) => {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);
  const [timeLeft, setTimeLeft] = useState('00:00:00');

  const getNextDate = () => {
    const now = new Date();

    const futureDates = times
      .filter(t => typeof t === 'string')
      .map(t => {
        const [h, m] = t.split(':').map(Number);
        const d = new Date();
        d.setHours(h, m, 0, 0);
        if (d <= now) d.setDate(d.getDate() + 1);
        return d;
      })
      .sort((a, b) => a - b);

    return futureDates[0] || null;
  };

  const formatTime = ms => {
    const total = Math.max(0, Math.floor(ms / 1000));
    const h = String(Math.floor(total / 3600)).padStart(2, '0');
    const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
    const s = String(total % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // recalcular próximo horario
  useEffect(() => {
    setTarget(getNextDate());
  }, [times]);

  useEffect(() => {
    if (!target) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        dispatch(startAlarm(medicationName));
        setTarget(getNextDate()); // preparar siguiente toma
      } else {
        setTimeLeft(formatTime(diff));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [target, dispatch, medicationName]);

  return <Text style={style}>{timeLeft}</Text>;
};
