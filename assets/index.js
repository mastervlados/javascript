const current = {

}

const previous = {
  sets: [
    { 
      id: '0',
      rows: [
        { id: '00', weight: 20, reps: 30, isLethal: false },
      ] 
    },
    { 
      id: '1',
      rows: [
        { id: '10', weight: 45, reps: 15, isLethal: false },
      ] 
    },
    { 
      id: '2',
      rows: [
        { id: '20', weight: 55, reps: 12, isLethal: false },
      ] 
    },
    { 
      id: '3',
      rows: [
        { id: '30', weight: 62.5, reps: 8, isLethal: false },
      ] 
    },
    { 
      id: '4',
      rows: [
        { id: '40', weight: 55, reps: 12, isLethal: true },
      ] 
    },
    { 
      id: '5',
      rows: [
        { id: '50', weight: 50, reps: 10, isLethal: true },
      ] 
    },
    { 
      id: '6',
      rows: [
        { id: '60', weight: 45, reps: 12, isLethal: true },
      ] 
    },
  ]
}

const getTonnage = (performance) => {

  // if object is empty (has no keys)
  // anyway return 0
  if (Object.keys(performance).length === 0) { return 0 }
  
  const { sets } = performance

  let tonnage = 0

  for (let set = 0; set < sets.length; set++) {
    const { rows } = sets[set]
    for (let row = 0; row < rows.length; row++) {
      const element = rows[row];
      const { weight, reps } = element
      tonnage += weight * reps
    }
  }

  return tonnage
  
}

const previousTonnage = getTonnage(previous)
const currentTonnage = getTonnage(current)
console.log(previousTonnage, 'kgs')
console.log(currentTonnage, 'kgs')