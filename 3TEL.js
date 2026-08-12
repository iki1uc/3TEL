// 3TEL.js
export const TEL3 = {
  id: "3TEL",
  mode: "tri-split",
  status: "active",

  split(entry) {
    return {
      arg: this.arg(entry),
      xarg: this.xarg(entry),
      arg3te: this.arg3te(entry),
      fullsync: this.fullsync(entry),
      new4tel: this.new4tel(entry)
    };
  },

  arg(entry) {
    return entry.includes("arg") ? "ARG" : "ARG-0";
  },

  xarg(entry) {
    return entry.includes("xarg") ? "XARG" : "XARG-0";
  },

  arg3te(entry) {
    return entry.includes("3te") ? "ARG3TE" : "ARG3TE-0";
  },

  fullsync(entry) {
    return {
      sync: true,
      mode: "3TEL→4TEL",
      factor: entry.includes("sync") ? 1.33 : 1.0
    };
  },

  new4tel(entry) {
    return entry.includes("4tel") ? "NEU-4TEL" : "PENDING-4TEL";
  }
};
