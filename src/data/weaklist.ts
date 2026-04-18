// Known weak passphrases used as brain wallets
// Sources: public brain wallet research, rockyou leaks, common Bitcoin forum phrases
export const BRAIN_WALLET_PHRASES: string[] = [
  // ── Ultra-common passwords ───────────────────────────────────────────────
  "password", "password1", "password123", "123456", "12345678", "1234567890",
  "qwerty", "abc123", "letmein", "monkey", "dragon", "master", "sunshine",
  "princess", "welcome", "shadow", "superman", "michael", "football",
  "iloveyou", "trustno1", "baseball", "batman", "access", "hello",
  "charlie", "donald", "harley", "ranger", "joshua", "george", "hunter",
  "buster", "thomas", "robert", "soccer", "hockey", "killer", "jordan",
  "maggie", "michelle", "jessica", "pepper", "andrew", "daniel", "matthew",
  "qazwsx", "zxcvbn", "asdfgh", "654321", "111111", "000000", "999999",
  "121212", "696969", "1q2w3e", "1qaz2wsx",

  // ── Bitcoin / crypto specific ────────────────────────────────────────────
  "bitcoin", "Bitcoin", "BITCOIN", "satoshi", "Satoshi", "nakamoto",
  "blockchain", "cryptocurrency", "ethereum", "Ethereum", "wallet",
  "private key", "privatekey", "publickey", "hodl", "HODL", "moon",
  "to the moon", "lambo", "crypto", "altcoin", "defi", "nft",
  "satoshinakamoto", "Satoshi Nakamoto", "genesis", "genesisblock",
  "21million", "21000000", "1bitcoin", "1btc", "btcwallet",
  "mybitcoin", "myetherwallet", "metamask", "coinbase", "binance",

  // ── Famous quotes / phrases commonly used ───────────────────────────────
  "correct horse battery staple",
  "correct horse battery",
  "the quick brown fox",
  "to be or not to be",
  "in the beginning",
  "hello world",
  "hello bitcoin",
  "test", "test123", "testing",
  "temp", "temp123",
  "changeme", "change me",
  "default", "secret", "secure",
  "passphrase", "mypassword", "mypass",
  "passw0rd", "p@ssword", "p@ssw0rd",

  // ── Keyboard walks ───────────────────────────────────────────────────────
  "qwertyuiop", "asdfghjkl", "zxcvbnm",
  "1234567890", "0987654321",
  "qwerty123", "qwerty1234",
  "1q2w3e4r", "1q2w3e4r5t",
  "zaq12wsx", "xsw2zaq1",

  // ── Dates / years ────────────────────────────────────────────────────────
  "01012000", "01011990", "01011980", "01011970",
  "19800101", "19900101", "20000101",
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",

  // ── Common names ─────────────────────────────────────────────────────────
  "alice", "bob", "charlie", "dave", "eve", "frank", "grace",
  "alice123", "bob123", "admin", "administrator", "root", "user",
  "guest", "demo", "login", "pass",

  // ── Religious / spiritual ────────────────────────────────────────────────
  "jesus", "god", "allah", "bible", "amen", "blessed",
  "godisgood", "godisgreat", "jesussaves", "holyspirit",

  // ── Pop culture ──────────────────────────────────────────────────────────
  "starwars", "matrix", "hackerman", "anonymous", "lulzsec",
  "letmein123", "iamgod", "killme", "hacker", "h4ck3r",

  // ── Repeating / sequential ───────────────────────────────────────────────
  "aaaa", "aaaaaaa", "aaaaaaaa",
  "bbbbbbbb", "cccccccc",
  "11111111", "22222222", "33333333", "44444444",
  "55555555", "66666666", "77777777", "88888888", "99999999",
  "00000000",

  // ── Short phrases known to be used ──────────────────────────────────────
  "fuckyou", "fuck", "shit", "damn",
  "love", "hate", "money", "cash", "rich", "poor",
  "freedom", "liberty", "justice", "truth",
  "alpha", "omega", "genesis", "exodus",

  // ── Known Profanity/vanity tool victims (public research) ────────────────
  "brainflayer", "brainwallet",
  "warpwallet test", "warpwallet",

  // ── Empty / trivial ──────────────────────────────────────────────────────
  "", " ", "  ",
  "0", "1", "a", "A",
];

// Known near-zero / sequential private keys (hex, no 0x prefix)
// These are the first N keys in the keyspace — well known to be scanned
export const WEAK_HEX_KEYS: string[] = [
  "0000000000000000000000000000000000000000000000000000000000000001",
  "0000000000000000000000000000000000000000000000000000000000000002",
  "0000000000000000000000000000000000000000000000000000000000000003",
  "0000000000000000000000000000000000000000000000000000000000000004",
  "0000000000000000000000000000000000000000000000000000000000000005",
  "0000000000000000000000000000000000000000000000000000000000000006",
  "0000000000000000000000000000000000000000000000000000000000000007",
  "0000000000000000000000000000000000000000000000000000000000000008",
  "0000000000000000000000000000000000000000000000000000000000000009",
  "000000000000000000000000000000000000000000000000000000000000000a",
  "000000000000000000000000000000000000000000000000000000000000000b",
  "000000000000000000000000000000000000000000000000000000000000000c",
  "000000000000000000000000000000000000000000000000000000000000000d",
  "000000000000000000000000000000000000000000000000000000000000000e",
  "000000000000000000000000000000000000000000000000000000000000000f",
  "0000000000000000000000000000000000000000000000000000000000000010",
  "0000000000000000000000000000000000000000000000000000000000000020",
  "0000000000000000000000000000000000000000000000000000000000000064",
  "00000000000000000000000000000000000000000000000000000000000000ff",
  "0000000000000000000000000000000000000000000000000000000000000100",
  // Max key boundary
  "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140",
  // All same byte patterns
  "1111111111111111111111111111111111111111111111111111111111111111",
  "2222222222222222222222222222222222222222222222222222222222222222",
  "3333333333333333333333333333333333333333333333333333333333333333",
  "4444444444444444444444444444444444444444444444444444444444444444",
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
  "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
  "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
  // Known Satoshi puzzle keys (public)
  "0000000000000000000000000000000000000000000000000000000000000008",
  "0000000000000000000000000000000000000000000000000000000000000015",
];
