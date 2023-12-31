import { BaseError } from "./BaseError";

export type Result<T, E extends BaseError = BaseError> = { success: true, result: T } | { success: false, error: E }
export type ApiResponse = { data: NonNullable<unknown> }


export const ensureError = (value: unknown): Error => {
    if (value instanceof Error) return value;

    let stringified = '[Unable to stringify the thrown value]';
    try {
        stringified = JSON.stringify(value);
    } catch { /* empty */ }

    const error = new Error(`This value was thrown as is, not through an Error: ${stringified}`);
    return error;
};

export const success = (response: NonNullable<unknown>): Result<ApiResponse, BaseError> => {
    return { success: true, result: { data: response } };
   /* if (Array.isArray(response)) {
        return { success: true, result: { data: response } };
    } else {
        return { success: true, result: { data: response } };
    }*/
};

export const failed = (error: Error | unknown): Result<ApiResponse, BaseError> => {
        return autoError(error);

};

// Skal slettes
export const invalidIdError = (entityName: string) => {
    if (entityName === 'user') {
        return new Error(`No ${entityName} with that email`);
    }
    return new Error(`No ${entityName} with that id`);
};

export const autoError = (arg: Error | unknown): Result<ApiResponse, BaseError> => {
    const error = ensureError(arg);
    let statusCode: string;

    if ('code' in error) {
        statusCode = generateStatusCode(String(error.code));        
        return {
            success: false, error: new BaseError(error.message, {
                error: error,
                statusCode: statusCode
            })
        };
    } 
    return {
        success: false, error: new BaseError(error.message, {
            error: error,
            statusCode: generateStatusCode(error.message)
        })
    };
};

//Laves om. 
export const customError = (arg: string): Result<ApiResponse, BaseError> => {
    const error = invalidIdError(arg);
    return {
        success: false, error: new BaseError(error.message, {
            error: error,
            statusCode: generateStatusCode('with that id')
        })
    };
};

export const generateStatusCode = (err: string): string => {
    const errorMappings: Record<string, string> = {
        'Invalid credentials': '400',
        'Invalid datel': '400',
        'Invalid Email': '400',
        'Not Acceptable': '406',
        'Invalid ID': '400',
        'with that id': '404',
        'ER_BAD_FIELD_ERROR': '404',
        'ER_DUP_ENTRY': '409',
    };
    const statusCode = errorMappings[err] || '500';
    return statusCode;
};