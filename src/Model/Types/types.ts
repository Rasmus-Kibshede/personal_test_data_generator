import { ApiResponse } from "../../util/errorHandler";

export interface Result {
    success: boolean;
    result?: ApiResponse;
}