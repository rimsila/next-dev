import { configResponsive, useResponsive } from './useResponsive';

import { useSubscribe, PubSub } from './usePubSub';

export { useResponsive, configResponsive, useSubscribe, PubSub };

interface WetrialHooksProps {
  /**
   * 格式化后端返回的数据
   */
  formTableResultFormat?: (data: any) => { total: number; list: any[] };
}

export const initHooks = () => {
  // props.formTableResultFormat && configUseFormTableFormatResult(props.formTableResultFormat);
};
