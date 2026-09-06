// 3TEL.js
export const TEL3 = {
  id: "3TEL",
  mode: "segment-logic",
  status: "active",

  // -----------------------------------------
  // SEGMENTE (Original)
  // -----------------------------------------
  segments: {
    HY:    ["◉","3","9","◎","81","3","↺"],
    PE:    ["◉","9","◎","81","◆","△","▣"],
    PER:   ["3","9","81","◆","756","△","27","▣","3"],

    TRANS: ["◎","81","◆","△"],
    WARB:  ["81","◆","△","27"],
    KANAL: ["756","△","27","▣"],

    TMPa:  ["3","◎","27"],
    TMPb:  ["9","81","▣"],
    TMPg:  ["◆","756","△"]
  },

  // -----------------------------------------
  // 3TEL = erste drei Elemente eines Segments
  // -----------------------------------------
  tri(segment) {
    const s = this.segments[segment];
    return s.slice(0, 3);
  },

  // -----------------------------------------
  // 4TEL = Synthese der drei Elemente
  // -----------------------------------------
  quad(tri) {
    return tri.join("→") + "→◎";
  },

  // -----------------------------------------
  // LAYER-LOGIK (wie du es wolltest)
  //
  // 1) industry = HY, PE, PER, TRANS, WARB, KANAL
  //    (hat industry + markt + boerse gleichzeitig)
  //
  // 2) markt = TMPa, TMPb
  //    (nimmt übrig gebliebenes)
  //
  // 3) boerse = TMPg
  //    (nimmt den letzten Rest)
  // -----------------------------------------
  layers: {
    industry: ["HY", "PE", "PER", "TRANS", "WARB", "KANAL"],
    markt:    ["TMPa", "TMPb"],
    boerse:   ["TMPg"]
  },

  // -----------------------------------------
  // LAYER → Triaden
  // -----------------------------------------
  layer(name) {
    return this.layers[name].map(seg => this.tri(seg));
  },

  // -----------------------------------------
  // STATIONEN (3TEL → 4TEL → Station)
  //
  // industry → TRANSIT
  // markt    → FLOW
  // boerse   → FINAL
  // -----------------------------------------
  stations: {
    industry: "TRANSIT",
    markt:    "FLOW",
    boerse:   "FINAL"
  },

  station(name) {
    return this.stations[name];
  }
};
