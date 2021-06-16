import { useCallback, useState } from 'react';

export default initial => {
  const [value, setValue] = useState(initial || false);
  const toggle = useCallback(
    () => setValue(value ? false : true),
    [setValue, value]
  );
  return [value, toggle];
};
