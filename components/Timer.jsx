import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export const Timer = ({ times = [], style }) => {
  const getNextDate = () => {
    const now = new Date();

    const futureDates = times
      .filter(h => h !== undefined)
      .map(hour => {
        const d = new Date();
        d.setHours(hour, 0, 0, 0);
        if (d <= now) d.setDate(d.getDate() + 1);
        return d;
      })
      .sort((a, b) => a - b);

    return futureDates[0];
  };

  const formatTime = ms => {
    const total = Math.max(0, ms / 1000);
    const h = Math.floor(total / 3600).toString().padStart(2, '0');
    const m = Math.floor((total % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(total % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const [target, setTarget] = useState(getNextDate());
  const [timeLeft, setTimeLeft] = useState('00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        const next = getNextDate();
        setTarget(next);
      } else {
        setTimeLeft(formatTime(diff));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return <Text style={style}>{timeLeft}</Text>;
};
