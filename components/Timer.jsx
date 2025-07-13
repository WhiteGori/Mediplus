import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';

export const Timer = props => {
  const dateCompare1 = new Date();
  dateCompare1.setHours(props.timeHour1);
  dateCompare1.setMinutes(0);
  dateCompare1.setSeconds(0);

  let dateArray = [dateCompare1];

  if (props.timeHour2 != undefined) {
    const dateCompare2 = new Date();
    dateCompare2.setHours(props.timeHour2);
    dateCompare2.setMinutes(0);
    dateCompare2.setSeconds(0);
    dateArray.push(dateCompare2);
  }

  if (props.timeHour3 != undefined) {
    const dateCompare3 = new Date();
    dateCompare3.setHours(props.timeHour3);
    dateCompare3.setMinutes(0);
    dateCompare3.setSeconds(0);
    dateArray.push(dateCompare3);
  }

  let dateCompare;

  function timeLeft() {
    let currentDate = new Date();
    let max = currentDate;
    for (let i = 0; i < dateArray.length; i++) {
      if (dateArray[i] > currentDate) {
        max = dateArray[i];
      }
    }

    if (max == currentDate) {
      for (let i = 0; i < dateArray.length; i++) {
        dateArray[i].setDate(currentDate.getDate() + 1);
      }
    }

    for (let i = 0; dateCompare == undefined; i++) {
      if (currentDate < dateArray[i]) {
        dateCompare = dateArray[i];
      }
    }

    let secs = (Math.floor((dateCompare - currentDate) / 1000) % 60)
      .toString()
      .padStart(2, '0');
    let mins = (Math.floor((dateCompare - currentDate) / 1000 / 60) % 60)
      .toString()
      .padStart(2, '0');
    let hours = Math.floor((dateCompare - currentDate) / 1000 / 60 / 60)
      .toString()
      .padStart(2, '0');
    return hours + ':' + mins + ':' + secs;
  }

  const [date, setDate] = useState(timeLeft(dateCompare));

  useEffect(() => {
    setInterval(() => {
      setDate(timeLeft(dateCompare));
    }, 1000);
  }, []);

  return <Text style={props.style}>{date}</Text>;
};
