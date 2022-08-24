function shortestToChar(s: string, c: string): number[] {
	const ans: number[] = []
	for (let i = 0; i < s.length; i++) {
		let dis = 0
		while(true) {
			let l = i - dis, r = i + dis
			if (l >=0 && s[l] === c || r < s.length && s[r] === c) {
				ans.push(dis)
				break
			}
			dis++
		}
	}
	return ans	
}
