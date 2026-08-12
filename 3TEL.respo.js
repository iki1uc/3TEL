// 3TEL.respo.js
import { TEL3_PIPE } from "./3TEL.pipe.js";

export const TEL3_RESPO = {
  speak(segment) {
    const out = TEL3_PIPE.run(segment);

    return `
Segment: ${segment}

3TEL: ${out.tri.join(" → ")}
4TEL: ${out.quad}

GEO:
α=${out.geo.alpha}
β=${out.geo.beta}
γ=${out.geo.gamma}

Physik:
Energie=${out.physik.energie}
Impuls=${out.physik.impuls}
Feld=${out.physik.feld}
`;
  }
};
