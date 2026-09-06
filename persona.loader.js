import { Meier } from "./tmp.meier.js";
import { Schulz } from "./tmp.schulz.js";

export const Persona = {
    active: Meier, // Standard

    set(name) {
        const key = name.toLowerCase();

        if (key === "meier") this.active = Meier;
        if (key === "schulz") this.active = Schulz;

        // ja/nein = toggeln
        if (key === "ja") this.active = Meier;
        if (key === "nein") this.active = Schulz;
    },

    getTriKey() {
        return this.active.triKey;
    },

    decorate(text) {
        return this.active.prefix + text;
    }
};
