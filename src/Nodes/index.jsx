import { Source, Action, Condition, End, Empty } from './Nodes';

export const nodeTypes = {
  source: Source,
  email: Action,
  sms: Action,
  waitThenCheck: Condition,
  end: End,
  empty: Empty,
};
