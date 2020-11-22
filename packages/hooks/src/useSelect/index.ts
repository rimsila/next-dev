import { useCallback, useState } from 'react';

interface IUseSelect {
  debug?: boolean;
  init?: any;
}

export const useSelect = (props: IUseSelect) => {
  const { debug, init = null } = props;

  const [select, setSelect] = useState(init);

  const handleSelect = useCallback(
    (value: any) => {
      setSelect(value);
    },
    [select],
  );

  if (debug) {
    console.log('debug', select);
  }
  return {
    handleSelect,
    select,
  };
};
