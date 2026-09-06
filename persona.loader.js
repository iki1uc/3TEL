import { Meier } from "./tmp.meier.js";
import { Schulz } from "./tmp.schulz.js";

export const Persona = {
    active: Meier, // Standard

    set(name) {
        if (name === "meier") this.active = Meier;
        if (name === "schulz") this.active = Schulz;
    },

    getTriKey() {
        return this.active.triKey;
    },

    decorate(text) {
        return this.active.prefix + text;
    }
};
