import React from 'react';
import { nextNotification, MapItem, NextRow, NextButton } from '@wetrial/component';

export default () => {
  const data = [
    {
      item: (
        <NextButton
          type="primary"
          onClick={() => nextNotification({ nextTypes: 'subscribeSuccess' })}
        >
          subscribeSuccess
        </NextButton>
      ),
      copyCode: `nextNotification({ nextTypes: 'subscribeSuccess'})`,
    },
    {
      item: (
        <NextButton
          type="primary"
          danger
          onClick={() => nextNotification({ nextTypes: 'subscribeErr' })}
        >
          subscribeErr
        </NextButton>
      ),
      copyCode: ` nextNotification({ nextTypes: 'subscribeErr' })
      `,
    },
    {
      item: (
        <NextButton
          type="primary"
          onClick={() => nextNotification({ nextTypes: 'submitContactSuccess' })}
        >
          submitContactSuccess
        </NextButton>
      ),
      copyCode: ` nextNotification({ nextTypes: 'submitContactSuccess' })
      `,
    },
    {
      item: (
        <NextButton
          type="primary"
          danger
          onClick={() => nextNotification({ type: 'error', message: 'custom message' })}
        >
          custom message
        </NextButton>
      ),
      copyCode: `nextNotification({ type: 'error', message: 'custom message' })
      `,
    },
    {
      item: (
        <NextButton
          next="warning"
          onClick={() => nextNotification({ type: 'warning', message: 'custom warning' })}
        >
          custom warning
        </NextButton>
      ),
      copyCode: `nextNotification({ type: 'warning', message: 'custom warning' })
      `,
    },
  ];

  return (
    <NextRow>
      <MapItem {...{ data, antSpan: 6 }} />
    </NextRow>
  );
};
