export const fromBase64 = (content) => {
  const contentInString = Buffer.from(content, 'base64').toString();

  return JSON.parse(contentInString);
};

export const toBase64 = (json) => {
  const contentInString = JSON.stringify(json, null, 2) + '\n';

  return Buffer.from(contentInString).toString('base64');
};
