import { useState } from 'react';

function useStateComponent() {
  const [arr, setArr] = useState<number[]>([])
  const [name, setName] = useState<string | null>(null)
  return <div>
    <button onClick={() => setArr([...arr, arr.length + 1])}>Add to Array</button>
    <div>{JSON.stringify(arr)}</div>
    <button onClick={() => setName("Danh")}>Set Name</button>
    <div> Name is {JSON.stringify(name)}</div>
  </div>
}

export default useStateComponent;