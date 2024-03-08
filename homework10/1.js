"use strict";

/*
  Дан объект numbers. 
  Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};

function checkObjectForValuesByCondition(obj) {
  for (const key in obj) {
    const value = obj[key];
    if (value >= 3) {
      console.log(key, value);
    };
  };
};

checkObjectForValuesByCondition(numbers);