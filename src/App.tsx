import { PropsWithChildren } from 'react';
function App({ children }: PropsWithChildren) {
  return <div className={`antialiased relative font-nippo text-sm font-normal`}>{children}</div>;
}

export default App;
