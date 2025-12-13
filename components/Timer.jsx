import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export const Timer = ({ times = [], style }) => {
  const getNextDate = () => {
    const now = new Date();

    const futureDates = times
      .filter(Boolean)
      .map(timeStr => {
        const [h, m] = timeStr.split(':').map(Number);
        const d = new Date();
        d.setHours(h, m, 0, 0);
        if (d <= now) d.setDate(d.getDate() + 1);
        return d;
      })
      .sort((a, b) => a - b);

    return futureDates[0];
  };

  const formatTime = ms => {
    const total = Math.max(0, Math.floor(ms / 1000));
    const h = String(Math.floor(total / 3600)).padStart(2, '0');
    const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
    const s = String(total % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const [target, setTarget] = useState(getNextDate());
  const [timeLeft, setTimeLeft] = useState('00:00:00');

  useEffect(() => {
    if (!target) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setTarget(getNextDate());
      } else {
        setTimeLeft(formatTime(diff));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [target, times]);

  return <Text style={style}>{timeLeft}</Text>;
};
