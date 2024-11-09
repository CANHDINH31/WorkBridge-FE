class CustomError<T, E> extends Error {
  data: T;
  errorType: E;

  constructor(message: string, data: T, errorType: E) {
      super(message);
      this.data = data;
      this.errorType = errorType;
      this.name = "CustomError";
  }
}

export default CustomError;
