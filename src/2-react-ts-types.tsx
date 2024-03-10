// https://keep.google.com/u/0/#NOTE/1CDX0ItG11nWZROFHA6QJarDF9JC81jTlXKMyS9fs5IMygdkGJvtwxkT1CfAOwOA

export default function Comp() {
  function toggleNavIsOpen(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // Work: e: React.MouseEvent<HTMLButtonElement, MouseEvent> (index.d.ts)
    // Not work: e: MouseEvent (lib.dom.d.ts)
    // Fallback: e: React.SyntheticEvent
    e.clientX;
  }

  return <button onClick={toggleNavIsOpen}></button>;
}
