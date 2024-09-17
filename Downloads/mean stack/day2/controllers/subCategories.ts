import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandling";
import { Subcategories } from "../interfaces/subCategories";
import subcategoriesModel from "../models/subcategoriesModel";
import { NextFunction, Request, Response } from "express";
import { FilterData } from '../interfaces/filterData';

export const filterSubcategories = (req:Request,res:Response,next:NextFunction) => {
    let filterData :FilterData= {}
    if (req.params.categoryId){
      filterData.category = req.params.categoryId
    }
    req.filterData = filterData
    next()
  }

export const getAllSubCategories = getAll<Subcategories>(subcategoriesModel,'categories')

export const createSubCategory = createOne <Subcategories> (subcategoriesModel )

export const getSubCategory = getOne <Subcategories> (subcategoriesModel)

export const updateSubCategory = updateOne <Subcategories> (subcategoriesModel )

export const deleteSubCategory = deleteOne <Subcategories> (subcategoriesModel )

