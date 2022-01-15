
// error thrown when unique constraint error occur
export class DuplicateError extends Error {
    constructor(message, public code:number=403) {
        super(message)
        this.name = 'DuplicateError';
        this.code = 403
    }
}

// error thrown when requested data does not exist

export class NotFound extends Error {
    constructor(message, public code:number=404) {
        super(message)
        this.name = 'NotFound';
        this.code = 404
    }
}

export class ServerError extends Error {
    constructor(message, public code:number=500) {
        super(message)
        this.name = 'ServerError';
        this.code = 500
    }
}
export class UnauthorizedAccessError extends Error {
    constructor(message, public code:number=403) {
        super(message)
        this.name = 'ServerError';
        this.code = 403
    }
}

