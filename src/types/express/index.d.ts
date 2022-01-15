
import {
    Request
 } from "express"

// the Request object was extended to support hospitalId as a property
export interface userInfoInRequest extends Request {
    hospitalId?: number // or any other type
 }