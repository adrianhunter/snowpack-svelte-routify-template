export function _dump(x: any): never;
export function _log(x: any): any;
export function filter(predicate: any): (array: any) => any;
export function filterAsync(mapper: any, array: any): Promise<any[]>;
export function identity(x: any): any;
export function mapAsync(mapper: any, array: any): Promise<[any, any, any, any, any, any, any, any, any, any]> | ((_array: any) => Promise<[any, any, any, any, any, any, any, any, any, any]>);
export function noop(): void;
export function nope(): boolean;
export function pipe(...fns: any[]): (initial: any) => any;
export function pipeAsync(...fns: any[]): Promise<{}>;
export function someAsync(postulate: any, array: any): Promise<boolean>;
