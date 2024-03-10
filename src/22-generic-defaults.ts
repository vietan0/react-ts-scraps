function firstOrNull<T = string>(array: T[]): T | null {
  return array.length === 0 ? null : array[0];
}

const x = firstOrNull([1, 2, 3]);

interface Component<T1 = string, T2 = { type: string }> {
  name: T1;
  props: T2;
  log: () => void;
}

const button: Component<number> = {
  name: 4,
  props: {
    type: 'Save',
  },
  log: () => console.log('Save Button'),
};
