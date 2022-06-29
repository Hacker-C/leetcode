/**
 * Encodes a URL to a shortened URL.
 */

// 有思路，CV了

const map: Map<string, string> = new Map()
const INDEX: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const TINYURL_PREFIX: string = 'http://tinyurl.com/'

function encode(longUrl: string): string {
  let str = ''
  while (true) {
    for (let i = 0; i < 6; i++) {
      str += INDEX[~~Math.random() * INDEX.length]
    }
    const shortUrl = TINYURL_PREFIX + str
    if (!map.has(shortUrl)) {
      map.set(shortUrl, longUrl)
      return shortUrl
    }
  }
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  return map.get(shortUrl)
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
