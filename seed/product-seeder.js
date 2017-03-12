var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://placehold.it/400x150',
        title: 'four test',
        description: ' four four one one description test content',
        price: 10
    }),
     new Product({
        imagePath: 'http://placehold.it/400x150',
        title: 'five test test',
        description: 'five five description test content',
        price: 10
    }),
     new Product({
        imagePath: 'http://placehold.it/400x150',
        title: 'six test test',
        description: 'six six description test content',
        price: 10
    })
];
// var done = 0;
// for (var i = 0; i < products.length; i++) {
//     products[i].save(function(err, result){
//         console.error(err)
//         done++;
//         if (done === products.length) {
//             exit();
//         }
//     }, global.Promise);
// }

products.forEach(function(ele,index,arr){
    arr[index].save(function(err){
        console.log('seed err')
    });
})

mongoose.disconnect();