const chunk = (arr, chunkSize, cache = []) => {
  const tmp = [...arr]
  while (tmp.length) cache.push(tmp.splice(0, chunkSize))
  return cache
}

export function createMonth(date) {
  let days = [],
      firstDayOfMonthDisplay = date.clone().startOf('month').startOf('week'),
      lastDayOfMonthDisplay = date.clone().endOf('month').endOf('week');

  for(var d = firstDayOfMonthDisplay.clone(); d.isBefore(lastDayOfMonthDisplay); d.add(1,'days')) {
    days.push(d.clone());
  }
  return chunk(days, 7);
}
