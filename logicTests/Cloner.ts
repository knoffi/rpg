export class Cloner {
    public static deepCopy<T>(source: T): T {
        return Array.isArray(source)
            ? source.map((item) => this.deepCopy(item))
            : source instanceof Date
            ? new Date(source.getTime())
            : source && typeof source === 'object'
            ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
                  o[prop] = this.deepCopy(
                      (source as { [key: string]: any })[prop]
                  );
                  return o;
              }, Object.create(Object.getPrototypeOf(source)))
            : (source as T);
    }
}
