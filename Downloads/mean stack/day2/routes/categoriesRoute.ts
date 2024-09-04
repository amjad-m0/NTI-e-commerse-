import { Router } from "express"
import { getAllCategories } from '../controllers/categories';

const categoriesRoute:Router = Router()
categoriesRoute.route('/')
.get(getAllCategories)


export default categoriesRoute;