function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  let res = 0
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      res++
    }
  }
  return res
}

export default busyStudent
