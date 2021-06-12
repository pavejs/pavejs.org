import { useCallback } from 'react';

import useState from 'src/hooks/use-state.js';

export default initial => {
  const [value, setValue] = useState(initial || false);
  const toggle = useCallback(
    () => setValue(value ? false : true),
    [setValue, value]
  );
  return [value, toggle];
};