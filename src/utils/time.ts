export const toUnixSeconds = (dateString: string) =>
  new Date(dateString).getTime() / 1000;
