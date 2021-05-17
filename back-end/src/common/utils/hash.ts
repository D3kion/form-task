import * as bcrypt from 'bcrypt';
import * as stringHash from 'string-hash';
import * as uuid from 'uuid-random';

export const generateSaltFromString = async (
  value: string,
  stringNum: number,
): Promise<string> => {
  const saltStartHash = await bcrypt.genSalt();
  const saltStart = saltStartHash.substring(0, 7);

  let saltEnd = '';
  saltEnd = saltEnd.padEnd(stringNum, stringHash(value));
  saltEnd = saltEnd.substring(0, stringNum);

  return saltStart + saltEnd;
};

export const generatePasswordSalt = value => generateSaltFromString(value, 22);

export const generateBcryptHash = (value: string, salt: string): string => {
  return bcrypt.hashSync(value, salt);
};

export const compareBcryptHash = (value: string, hash: string): boolean => {
  return bcrypt.compare(value, hash);
};

export const randomUUID = () => uuid();
