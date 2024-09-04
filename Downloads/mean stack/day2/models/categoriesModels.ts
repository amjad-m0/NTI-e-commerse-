import { Schema,model } from "mongoose";
import { Categories } from "../interface/categories";
const categoriesSchema:Schema = new Schema<Categories> ({
    name:{type:String,required:true,unique:true},
    image:{type:String,},
},{timestamps:true})

export default model<Categories>('categories',categoriesSchema)