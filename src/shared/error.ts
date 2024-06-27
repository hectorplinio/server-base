export class ServerBaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServerBaseError';
  }
}

export class ValidationError extends ServerBaseError {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class ApplicationError extends ServerBaseError {
  constructor(message: string) {
    super(message);
    this.name = 'ApplicationError';
  }
}

export class EntityNotFoundError extends ServerBaseError {
  constructor(message: string) {
    super(message);
    this.name = 'EntityNotFoundError';
  }
}
