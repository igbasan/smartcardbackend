
import {
    Request
 } from "express"


export interface userInfoInRequest extends Request {
    hospitalId?: number // or any other type
 }