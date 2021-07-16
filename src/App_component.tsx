import React, { ReactElement, ReactNode, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { title } from 'process';

function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>
}

function HeadingWithContent({ children }: { children: ReactNode }): ReactElement | null {
  return <h1>{children}</h1>
}

const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}
type ContainerProps = { children?: ReactNode } & typeof defaultContainerProps

function Container({ heading, children }: ContainerProps) {
  return <div>
    <h1>{heading}</h1>
    {children}
  </div>
}
Container.defaultProps = defaultContainerProps;

function TextWithNumber({ children }: { children: (num: number) => ReactNode }) {
  const [number, setNumber] = useState(1);

  return <div>
    <div>{children(number)}</div>
    <button onClick={() => setNumber(number + 1)}>Add</button>
  </div>
}

function List<ListItem>({ items }: { items: ListItem[] }) {
  return <ul>
    {items.map((item) => <li>{item}</li>)}
  </ul>
}

class MyHeader extends React.Component<{ title: ReactNode }> {
  render() {
    return <h1>{this.props.title}</h1>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextWithNumber>{(number) => <strong>Today's number is {number}</strong>}</TextWithNumber>
        <Heading title={"Hello Danh"} />
        <List items={['Danh', 'AAA']} />
        <HeadingWithContent><b>Hi</b></HeadingWithContent>
        <Container>hi</Container>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
