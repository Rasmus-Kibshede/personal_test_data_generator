import { BaseError } from "../../util/BaseError";
import { ApiResponse } from "../../util/errorHandler";

export interface Result {
    success: boolean;
    result?: ApiResponse;
}

export interface errorsInterface {
    success: boolean,
    error: BaseError
}