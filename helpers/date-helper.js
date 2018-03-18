// TODO Test this!
// TODO Still needed?
export const dayKeyForDate = date => {
  const parsedDate = new Date(date)
  return `${parsedDate.getFullYear()}-${parsedDate.getMonth()}-${parsedDate.getDate()}`
}

export const newDayStarted = (dateCandidateKey) => {
  const todayDateKey = dayKeyForDate(new Date())
  return todayDateKey !== dateCandidateKey
}

