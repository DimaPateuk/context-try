export class ContextProviderState<M extends Object> {
  private model: M = {} as any;

  readField<K extends keyof M>(key: K): M[K] {
    return this.model[key];
  }

  setState(state: M): void {
    this.model = state;
  }
}
