// eslint-disable-next-line import/no-mutable-exports
let validateMessages = {
  default: 'Verification failed',
  required: `Can't be empty`,
  enum: 'Must be one of [${enum}]',
  whitespace: 'cannot be empty',
  date: {
    format: 'Not a valid date format',
    parse: 'Cannot be converted to date format',
    invalid: 'Invalid date format',
  },
  types: {
    string: 'Only input string type',
    method: 'Only enter "${type}" type',
    array: 'Only enter "${type}" type',
    object: 'Only enter "${type}" type',
    number: 'Only enter numbers',
    date: 'Only enter the date',
    boolean: 'Only enter "${type}" type',
    integer: 'Only input integers',
    float: 'Only enter values',
    regexp: 'The input does not match to go',
    email: 'Incorrect email format',
    url: 'The url format is incorrect',
    hex: 'Only enter "${type}" type',
  },
  string: {
    len: 'Must be $(len) characters',
    min: 'Cannot be less than $(min) characters',
    max: 'Cannot be more than $(max) characters',
    range: 'The number of characters is between $(min)-$(max)',
  },
  number: {
    len: 'The value can only be $(len)',
    min: 'Cannot be less than $(min)',
    max: 'Cannot be greater than $(max)',
    range: 'Only between ${min}-${max}',
  },
  array: {
    len: 'You must select the $(len) item',
    min: 'No less than $(min) items',
    max: 'Cannot be more than $(max) items',
    range: 'Must choose between $(min)-$(max) items',
  },
  pattern: {
    mismatch: 'The content entered does not meet the requirements',
  },
};

export default validateMessages;

/**
 * Configure the default prompt message
 * @param messages Message template
 */
export const configValidateMessage = (messages: Partial<typeof validateMessages>) => {
  validateMessages = {
    ...validateMessages,
    ...messages,
  };
};
