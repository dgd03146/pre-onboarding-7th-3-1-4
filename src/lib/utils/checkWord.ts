const pattern = /([^가-힣a-z\x20])/i;

export const checkWord = (query: string) => {
  if (pattern.test(query)) {
    return false;
  } else {
    return true;
  }
};
