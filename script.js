// 'use strict'
<!-- KAS TAS CATCH 💩 -->
// const id = -5;
//
// function getPerson(id) {
//     if (id < 0) {
//         throw new Error('ID must not be negative: '+id);
//     }
//     // return { id: id }; // normally: retrieved from database
// }
//
// function getPersons(ids) {
//     var result = [];
//     ids.forEach(function getPerson(id) {
//         try {
//             var person = getPerson(id);
//             result.push(person);
//         } catch (exception) {
//             console.log(exception);
//         }
//     });
//     return result;
// }
// getPerson();
// getPersons();
<!-- VEIKIA ir NEVEIKIA -->
// var start ;
// function createIncrementor(start) {
//     return function () {  // (1)
//         start++;
//
//         return start;
//     }
// }
//
//         console.log(start);
//
// createIncrementor();
//


<!-- VEIKIA -->
// const elems = document.querySelector('a');
// elems.addEventListener('click', function(){
//   console.log(elems);
//   alert( 'I am link #' );
//
// });
<!-- VEIKIA -->
// var elems = document.getElementsByTagName( 'a' );
//
// for ( var i = 0; i < elems.length; i++ ) {
//
// elems[i].addEventListener( 'click', function(){
// // e.preventDefault();
// console.log(elems);
// alert( 'I am link #' + i );
// }, 'false' );
//
// };
<!-- LOL veikia,, bet sita sintakse sucks -->
// var elems = document.getElementsByTagName( 'a' );
//
// for ( var i = 0; i < elems.length; i++ ) {
//
// (function( lockedInIndex ){
// elems[ i ].addEventListener( 'click', function(e){
//
// e.preventDefault();
//
// alert( 'I am link #' + lockedInIndex );
//
// }, 'false' );
//
// })( i );
//
// }
