import { PRODUCT_ERROR, PRODUCT_LOADING, PRODUCT_SUCESS } from "./ProductConstant"

const initialData={
    fetchedData:[],
    filterData:[],
    loading:false,
    error:false
}
export const productReducer=(store=initialData,{type,payload})=>{
    switch(type){
        case PRODUCT_LOADING : return {...store, loading:true}
        case PRODUCT_ERROR : return {...store, loading:false,error:true}
        case PRODUCT_SUCESS : return {...store , fetchedData:[...payload] , error:false,loading:false}
        default : return store
    }

}