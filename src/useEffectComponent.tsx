import { useState, useEffect } from 'react';

function useEffectComponent() {
  const [val, setVal] = useState<number>(1)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal(val  => val + 1);
    }, 2000)
    return () => window.clearInterval(timer)
  }, [])
  return <div>
    {val}
  </div>
}

export default useEffectComponent;