import { CONSTANTS } from '../lib/index';
import { createHash } from 'crypto';

export function Encode(str: string) {
  let { prefix, suffix } = CONSTANTS.encoding;

  return createHash('sha256')
    .update(prefix + str + suffix)
    .digest('hex');
}
