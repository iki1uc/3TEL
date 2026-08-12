// 3TEL.respo.js
import { TEL3_PIPE } from "./3TEL.pipe.js";

export const TEL3_RESPO = {
  id: "3TEL.respo",
  mode: "speakwrite",
  status: "active",

  speak(entry) {
    const out = TEL3_PIPE.run(entry);

    return `
3TEL-Output:
ARG: ${out.tri.arg}
XARG: ${out.tri.xarg}
ARG3TE: ${out.tri.arg3te}
4TEL: ${out.tri.new4tel}

GEO:
α=${out.geo.alpha}
β=${out.geo.beta}
γ=${out.geo.gamma}
δ=${out.geo.delta}

Physik:
Energie=${out.physik.energie}
Impuls=${out.physik.impuls}
Feld=${out.physik.feld}

GAMMA:
Value=${out.gamma.value}
Percent=${out.gamma.percent.toFixed(2)}%
Degree=${out.gamma.degree.toFixed(2)}°
`;
  }
};
