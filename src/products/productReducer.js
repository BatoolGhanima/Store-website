const productReducer = (data, action) => {
    if ( action.type == 'ADD') return [{...action.data,quantity : 1 } , ...data ]
}
export default productReducer