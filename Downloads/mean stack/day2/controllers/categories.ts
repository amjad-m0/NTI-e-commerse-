import {NextFunction,Request,Response} from "express";
import  categoriesModel  from '../models/categoriesModels';
import asyncHandler from "express-async-handler";
import { Categories } from "../interface/categories";
export const getAllCategories = asyncHandler (async(req:Request,res:Response,next: NextFunction)=>{
    const categories:Categories[] = await categoriesModel.find()
    res.status(200).json({data:categories})
})
