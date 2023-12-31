import { BaseError } from '../util/BaseError';
import { Result, ApiResponse } from '../util/errorHandler';
import { Response } from 'express';

export const response = (res: Response<unknown, Record<string, unknown>>, response: Result<ApiResponse, BaseError>, statusCodeSuccess: number) => {
    res.status(response.success ? statusCodeSuccess : Number(response.error.statusCode)).send(response.success ? 
        { success: response.success, data: response.result.data } : { success: response.success, message: response.error.message });
};

export const responseNested = (res: Response<unknown, Record<string, unknown>>, response: Result<ApiResponse, BaseError>, statusCodeSuccess: number) => {
    res.status(response.success ? statusCodeSuccess : Number(response.error.statusCode)).send(response.success ? 
        { success: response.success, data: (response.result.data as never)[0]} : { success: response.success, message: response.error.message });
};

export const responseError = (res: Response<unknown, Record<string, unknown>>, response: Result<ApiResponse, BaseError>) => {
    res.status(response.success ? 400 : Number(response.error.statusCode)).send(response.success ? 
        { success: response.success, data: response.result.data } : { success: response.success, message: response.error.message });
};