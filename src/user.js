export function validateUserName(userName) {
  if (userName === '') {
    return {
      userName: userName,
      error: true,
    };
  }

  return { userName: userName };
}
