export default class Collection<K, V> extends Map {
    filter(fn: Function): Collection<K, V>;
    map(fn: Function): Collection<K, V>;
}
