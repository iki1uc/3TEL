// 3TEL.js
export const TEL3 = {
  id: "3TEL",
  mode: "segment-logic",
  status: "active",

  segments: {
    HY:  ["◉","3","9","◎","81","3","↺"],
    PE:  ["◉","9","◎","81","◆","△","▣"],
    PER: ["3","9","81","◆","756","△","27","▣","3"],
    TRANS:["◎","81","◆","△"],
    WARB:["81","◆","△","27"],
    KANAL:["756","△","27","▣"],
    TMPa:["3","◎","27"],
    TMPb:["9","81","▣"],
    TMPg:["◆","756","△"]
  },

  // 3TEL = erste drei Elemente eines Segments
  tri(segment) {
    const s = this.segments[segment];
    return s.slice(0, 3);
  },

  // 4TEL = Synthese der drei Elemente
  quad(tri) {
    return tri.join("→") + "→◎";
  }
};
