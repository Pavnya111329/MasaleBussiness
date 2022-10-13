class ApiFeature {
    constructor(query,queryStr){
this.query = query;
this.queryStr = queryStr;
    }
    search(){
       let keyword = this.queryStr ? {
            name :{
                $regex : this.queryStr.keyword,
                $options : "i"
            }
        }:{}
console.log(keyword)
        this.query = this.query.find({...keyword})

        return this
    }
}
 
module.exports = ApiFeature