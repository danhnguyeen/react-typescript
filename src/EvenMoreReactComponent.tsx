import { ReactElement, ReactNode } from "react";

// export function Heading({title}: {title: string}) {
//   return <h2>{title}</h2>
// }
export interface HeadingProps {
  title: string
}
export const Heading = ({ title }: HeadingProps) => {
  return <h2>{title}</h2>
}

// function ListComponent<ListItem>({ items, render }: { items: ListItem[]; render: (item: ListItem) => ReactNode }) {
//   return <ul>
//     {items.map((item, index) => <li key={index}>{render(item)}</li>)}
//   </ul>
// }

// generic function
// https://www.typescriptlang.org/docs/handbook/2/generics.html
type ListComponentProps = <ListItem>({
  items,
  render
}: { items: ListItem[]; render: (item: ListItem) => ReactNode; })
  => ReactElement;

export const ListComponent: ListComponentProps = ({ items, render }) => {
  return <ul>
    {items.map((item, index) => <li key={index}>{render(item)}</li>)}
  </ul>
}

function EvenMoreReactComponent() {
  return <div><Heading title="Hello" />
    <ListComponent items={["Item 1", "Item 2"]} render={(item) => <strong>{item}</strong>} />
  </div>
}

export default EvenMoreReactComponent;