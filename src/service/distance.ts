export class Distance {
	static async calculate(a: string, b: string): Promise<number> {
    if (a.length > b.length) return (a.length - b.length) * 1730
    else return (b.length - a.length) * 1730
  }
}