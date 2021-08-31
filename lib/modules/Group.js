"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
class Group extends Map {
    filter(fn) {
        const filtered = new Group();
        for (const [key, value] of this) {
            fn(value) ? filtered.set(key, value) : null;
        }
        return filtered;
    }
    map(fn) {
        const mapped = new Group();
        for (const [key, value] of this) {
            mapped.set(key, fn(value));
        }
        return mapped;
    }
}
exports.Group = Group;
