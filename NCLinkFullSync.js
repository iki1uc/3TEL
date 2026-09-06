export const LINK = {
    modules: {},
    axes: {},

    bind(name, ref, axis = null) {
        if (axis) {
            if (!this.axes[axis]) this.axes[axis] = {};
            this.axes[axis][name] = ref;
            console.log(`[NC.link] bind axis:${axis} → ${name}`);
        } else {
            this.modules[name] = ref;
            console.log(`[NC.link] bind → ${name}`);
        }
    },

    fullSync(packet) {
        const out = {
            time: Date.now(),
            packet,
            axes: Object.keys(this.axes),
            sync: "open-diamond"
        };
        console.log("[NC.link FullSync OPEN DIAMOND] →", out);
        return out;
    },

    route(type, data) {
        const out = `[NC.link] ${type} → ${JSON.stringify(data)}`;
        console.log(out);
        return out;
    }
};
