import { TablePaginationConfig } from 'antd/lib/table';

/**
 * Single-column layout of form items Responsive configuration (recommended to assign to Form)
 */
export const LAYOUT_FORM_SINGLE = {
  labelCol: {
    xs: { span: 8 },
    sm: { span: 6 },
    md: { span: 5 },
    lg: { span: 4 },
    xl: { span: 4 },
    xxl: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 16 },
    sm: { span: 18 },
    md: { span: 19 },
    lg: { span: 20 },
    xl: { span: 20 },
    xxl: { span: 22 },
  },
};

/**
 * Two-column layout of the form Responsive configuration (recommended to be assigned to the Form)
 */
export const LAYOUT_FORM_TWO = {
  labelCol: {
    xs: { span: 8 },
    sm: { span: 6 },
    md: { span: 5 },
    lg: { span: 8 },
    xl: { span: 8 },
    xxl: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 16 },
    sm: { span: 18 },
    md: { span: 19 },
    lg: { span: 16 },
    xl: { span: 16 },
    xxl: { span: 20 },
  },
};

/**
 * Col two-column layout responsive (used in From)
 */
export const LAYOUT_COL_TWO = {
  xs: 24, // <576px
  sm: 24, // ≥576px
  md: 24, // ≥768px
  lg: 12, // ≥992px
  xl: 12, // ≥1200px
  xxl: 12, // ≥1600px
};

/**
 * Search form Col with two columns Responsive configuration
 */
export const LAYOUT_COL_SEARCH_TWO = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 12,
};

/**
 * Search form Col three columns responsive configuration
 */
export const LAYOUT_COL_SEARCH_THREE = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 8,
};

/**
 * Search form Col four columns responsive configuration
 */
export const LAYOUT_COL_SEARCH_FOUR = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 6,
};

/**
 * Search form Col six columns responsive configuration
 */
export const LAYOUT_COL_SEARCH_SIX = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 6,
  xl: 6,
  xxl: 4,
};

/**
 * Single selection, multiple selection, six columns, responsive configuration
 */
export const LAYOUT_CHECK_SIX = {
  xs: 1,
  sm: 1,
  md: 2,
  lg: 4,
  xl: 6,
  xxl: 6,
};

/**
 * Single selection, multiple selection, eight columns, responsive configuration
 */
export const LAYOUT_CHECK_EIGHT = {
  xs: 12,
  sm: 12,
  md: 8,
  lg: 6,
  xl: 4,
  xxl: 3,
};

/**
 * Display the width limit of the scroll bar
 */
export const TABLE_SCROLL_WIDTH = 'max-content';

/**
 * Default date and time format
 */
export const DEFAULT_DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

/**
 * Default date and time
 */
export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

/**
 * Default page number
 */
export const PAGE_SIZE = 10;

/**
 * General paging property configuration
 */
export const PAGE_PROPS: TablePaginationConfig = {
  defaultCurrent: 1,
  total: 1,
  pageSize: PAGE_SIZE,
  defaultPageSize: PAGE_SIZE,
  // showSizeChanger: true,
  hideOnSinglePage: true,
  // showQuickJumper:true,
  showTotal: (total, [start, end]) => `First${start}-${end} of ${total}Article`,
};
