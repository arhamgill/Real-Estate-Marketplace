export const errorHandler = (status, message) => {
  const error = new Error(message);
  error.statusCode = status;
  return error;
};
