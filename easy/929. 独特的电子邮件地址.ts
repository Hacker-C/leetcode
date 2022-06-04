function numUniqueEmails(emails: string[]): number {
  let count = 0
  let set: Set<String> = new Set()
  emails.forEach(email => {
    let [local, dm] = email.split('@')
    let temp = ''
    for (let c of local) {
      if (c === '+') break
      if (c !== '.') temp += c
    }
    let final = temp + '@' + dm
    if (!set.has(final)) {
      count++
      set.add(final)
    }
  })
  return count
}
