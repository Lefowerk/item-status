window.function = function (re, bo, start, end) { 
  const today = new Date()
  today.setHours(0,0,0,0) 
  const s = new Date(start.value)
  s.setHours(0,0,0,0)
  const e = new Date(end.value)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1);
  e.setHours(0,0,0,0)
  
  
  if (!bo.value && s.valueOf() == today.valueOf()) {
    return 'Abholung heute'
  } else if (!bo.value && s.valueOf() == tomorrow.valueOf()) {
    return 'Abholung morgen'
  } else if (s.valueOf() > today.valueOf()) {
    return 'Reserviert'
  } else if (s.valueOf() < today.valueOf() && !bo.value) {
    return 'Nicht abgeholt'
  } else if(re.value) {
    return 'Zurückgegeben'
  } else if (bo && e.valueOf() == today.valueOf()) {
    return 'Rückgabe heute'
  } else if (bo && e.valueOf() < today.valueOf()) {
    return 'Überfällig'
  } else if (bo.value && !re.value) {
    return 'Ausgeliehen'
  } else {
    return 'Fehler'
  }
}
