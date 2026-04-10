// Sorting limiting and Pagination
const mongoose = require("mongoose");

async function sortPaginationDemo(){
    try{
        await mongoose.connect("mongo://localhost:27017//merntraining");
        console.log("MongoDB connected successfully");

        const sortedAscending = await CSSMathProduct.find({category: "Electronics"}).sort({price:1});
        console.log(sortedAscending);

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch(error){
        console.log("sort_Pagination demo error:",error.message);
    }
}
sortPaginationDemo();