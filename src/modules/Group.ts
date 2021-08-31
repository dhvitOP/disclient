export class Group<K, V> extends Map {
  public filter(fn: Function): Group<K, V> {
    const filtered = new Group();
    for (const [key, value] of this) {
      fn(value) ? filtered.set(key, value) : null;
    }
    return filtered;
  }

  public map(fn: Function): Group<K, V> {
    const mapped = new Group();
    for (const [key, value] of this) {
      mapped.set(key, fn(value));
    }
    return mapped;
  }
}
