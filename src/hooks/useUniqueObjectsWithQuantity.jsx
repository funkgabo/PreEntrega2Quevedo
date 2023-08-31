import { useState, useEffect } from 'react';

export function useUniqueObjectsWithQuantity(inputArray) {
    const [uniqueArray, setUniqueArray] = useState([]);
  
    useEffect(() => {
      function removeDuplicatesAndCount(arr) {
        const countMap = {};
        arr.forEach(obj => {
          const key = JSON.stringify(obj);
          countMap[key] = (countMap[key] || 0) + 1;
        });
  
        const resultArray = [];
        for (const key in countMap) {
          if (countMap.hasOwnProperty(key)) {
            const obj = JSON.parse(key);
            obj.units = countMap[key];
            resultArray.push(obj);
          }
        }

        return resultArray;
      }
  
      const updatedArray = removeDuplicatesAndCount(inputArray);
      setUniqueArray(updatedArray);

    }, [inputArray]);
    const totalPrice = uniqueArray.map(prod => prod.price * prod.units).reduce((a, b) => a + b, 0)
    return [uniqueArray, totalPrice];
  }