const getRandomCard = t => t[Math.floor(Math.random() * (t.length - 1))],
  makePhrase = (t, e) => "eng" == e ? "bald" == t || "male" == t ? `Is (s)he ${words[t][e]}?` : `Does (s)he have ${words[t][e]}?` : "bald" == t || "male" == t ? `Ele(a) é ${words[t][e]}?` : `Ele(a) tem ${words[t][e]}?`,
  getRandomBest = t => {
    if (t.length > 1) {
      return t[Math.floor(Math.random() * t.length)]
    }
    return t[0]
  },
  setTotal = t => {
    for (var e in Object.keys(t.total).forEach(e => t.total[e] = 0), t) {
      if ("total" == e) break;
      for (var a in t[e]) t[e][a] && (t.total[a] += 1)
    }
    for (var o in t.total) 0 == t.total[o] && delete t.total[o]
  };
let logDictionary = (t, e = "DICIONARY") => {};
const getFrequency = (t, e) => {
    let a = e.total[t],
      o = Object.keys(e).length - 1;
    return ((a * a + (o - a) * (o - a)) / o).toFixed(5)
  },
  getDifference = (t, e) => {
    let a = e.total[t],
      o = Object.keys(e).length - 1;
    return Math.abs(a - o / 2).toFixed(3)
  };