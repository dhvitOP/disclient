"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection extends Map {
    filter(fn) {
        const filtered = new Collection();
        for (const [key, value] of this) {
            fn(value) ? filtered.set(key, value) : null;
        }
        return filtered;
    }
    map(fn) {
        const mapped = new Collection();
        for (const [key, value] of this) {
            mapped.set(key, fn(value));
        }
        return mapped;
    }
}
exports.default = Collection;
