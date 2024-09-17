import { NextFunction, Router } from 'express';
import { createSubCategory, deleteSubCategory, getAllSubCategories, getSubCategory, updateSubCategory } from '../controllers/subCategories';
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator, updateSubcategoryValidator } from '../utils/validators/subcategoriesValidator';

const subcategoriesRoute: Router = Router({mergeParams:true})

subcategoriesRoute.route('/')
  .get(getAllSubCategories)
  .post(createSubcategoryValidator,createSubCategory);

  subcategoriesRoute.route('/:id')
  .get(getSubcategoryValidator,getSubCategory)
  .put(updateSubcategoryValidator,updateSubCategory)
  .delete(deleteSubcategoryValidator,deleteSubCategory);

export default subcategoriesRoute;