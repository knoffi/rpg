type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
export type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> };

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
    public static deepReadonlyCopy<T>(source: T): DeepReadonly<T> {
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
    public static deepWritableCopy<T>(source: T): DeepWriteable<T> {
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
const test = { b: { c: 8 } };
const myDeepReadonly = Cloner.deepReadonlyCopy(test);
