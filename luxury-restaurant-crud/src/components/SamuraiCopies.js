// Restaurant.js
// // 1/10
// import React from 'react';

// export default function Restaurant01(props) {
//     function ratingLabel(parameter) {
//         switch (parameter) {
//             case '1':
//                 return '1 star';
//             case '2':
//                 return '2 stars';
//             case '3':
//                 return '3 stars';
//             case '4':
//                 return '4 stars';
//             case '5':
//                 return '5 stars';
//             default:
//                 return 'Error! Unknow rating. Please, try again';
//         }
//     }

//     function ratingStyle(parameter, icon) {
//         switch (parameter) {
//             case '1':
//                 return icon ? 'YourIconGoesHere' : 'success';
//             case '2':
//                 return icon ? 'YourIconGoesHere' : 'success';
//             case '3':
//                 return icon ? 'YourIconGoesHere' : 'success';
//             case '4':
//                 return icon ? 'YourIconGoesHere' : 'success';
//             case '5':
//                 return icon ? 'YourIconGoesHere' : 'success';
//             default:
//                 return 'Error. Rating unknown! Please, try again.';
//         }
//     }

//     return(
//     <div className={'card mb-2 shadow-sm border-' + ratingStyle(props.specificRestaurant.rating)
//     }
//     >
//         <div className="card-body">
//             <div className="d-flex justify-content-between">
//                 <h4 className="card-title">
//                     <span className="badge bg-secondary me-1">
//                         {props.specificRestaurant.id}
//                     </span>
//                     - {props.specificRestaurant.title}
//                 </h4>
//                 <h6> Rating:
//                     <span className={'ms-1 text-' + ratingStyle(props.specificRestaurant.rating)}>
//                         <i className={'me-1 far fa-' + ratingStyle(props.specificRestaurant.rating, true)}></i>
//                         {ratingLabel(props.specificRestaurant.rating)}
//                     </span>
//                 </h6>
//             </div>
//             <p className="card-text">{props.specificRestaurant.description}</p>
//             <div className="d-flex justify-content-end pt-2 m-0 border-top">
//                 <button className="btn btn-sm btn-primary me-2" onClick={() => props.editRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-pen me-2"></i>
//                     Edit
//                 </button>
//                 <button className="btn btn-sm btn-danger" onClick={() => props.removeRestaurant(props.specificRestaurant.id)}>
//                 <i className="fas fa-trash me-2"></i>
//                 </button>
//             </div>
//         </div>
//     </div>
//     );
// }

// 2/10
// import React from 'react';

// export default function Restaurant02(props) {
//     function ratingLabel(parameter) {
//         switch (parameter) {
//             case '1':
//                 return '1 star';
//             case '2':
//                 return '2 stars';
//             case '3':
//                 return '3 stars';
//             case '4':
//                 return '4 stars';
//             case '5':
//                 return '5 stars';
//             default:
//                 return 'Error! Unknown rating. Please, try again.';
//         }
//     }

//     function ratingStyle(parameter, icon) {
//         switch (parameter) {
//             case '1':
//                 return icon ? 'YourIcon' : 'success';
//             case '2':
//                 return icon ? 'YourIcon' : 'success';
//             case '3':
//                 return icon ? 'YourIcon' : 'success';
//             case '4':
//                 return icon ? 'YourIcon' : 'success';
//             case '5':
//                 return icon ? 'YourIcon' : 'success';
//             default:
//                 return 'Error! Rating unknown. Please, try again.';
//         }
//     }

//     return (<div className={'card mb-2 shadow-sm border-' + ratingStyle(props.specificRestaurant.rating)}>
//         <div className="card-body">
//             <div className="d-flex justify-content-between">
//                 <h4 className="card-title">
//                     <span className="badge bg-secondary me-1">
//                         {props.specificRestaurant.id}
//                     </span>
//                     - {props.specificRestaurant.id}
//                 </h4>
//                 <h6> Rating:
//                     <span className={'ms-1 text-' + ratingStyle(props.specificRestaurant.rating)}>
//                         <i className={'me-1 far fa-' + ratingStyle(props.specificRestaurant.rating, true)}></i>
//                         {ratingLabel(props.specificRestaurant.rating)}
//                     </span>
//                 </h6>
//             </div>
//             <p className="card-text">{props.specificRestaurant.description}</p>
//             <div className="d-flex justify-content-end pt-2 m-0 border-top">
//                 <button className="btn btn-sm btn-primary me-2" onClick={() => props.editRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-pen me-2"></i>
//                     Edit
//                 </button>
//                 <button className="btn btn-sm btn-danger" onClick={() => props.removeRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-trash me-2"></i>
//                 </button>
//             </div>
//         </div>
//     </div>
//     );
// }

// 3/10
// import React from 'react';

// export default function Restaurant03(props) {
//     function ratingLabel03(parameter) {
//         switch (parameter) {
//             case '1':
//                 return '1 star';
//             case '2':
//                 return '2 stars';
//             case '3':
//                 return '3 stars';
//             case '4':
//                 return '4 stars';
//             case '5':
//                 return '5 stars';
//             default:
//                 return 'Error! Unknown rating. Please, try again';
//         }
//     }

//     function ratingStyle03(parameter, icon) {
//         switch (parameter) {
//             case '1':
//                 return icon ? "Icon03" : 'success';
//             case '2':
//                 return icon ? "Icon03" : 'success';
//             case '3':
//                 return icon ? "Icon03" : 'success';
//             case '4':
//                 return icon ? "Icon03" : 'success';
//             case '5':
//                 return icon ? "Icon03" : 'success';
//             default:
//                 return 'Error. Unknown rating. Please, re-check this information.';
//         }
//     }

//     return (
//         <div className={'card mb-2 shadow-sm border-' + ratingStyle03(props.specificRestaurant.rating)
//         }
//         >
//             <div className="card-body">
//                 <div className="d-flex justify-content-between">
//                     <h4 className="card-title">
//                         <span className="badge bg-secondary me-1">
//                             {props.specificRestaurant.id}
//                         </span>
//                         - {props.specificRestaurant.title}
//                     </h4>
//                     <h6> Rating:
//                         <span className={'ms-1 text-' + ratingStyle03(props.specificRestaurant.rating)}>
//                             <i className={'me-1 far fa-' + ratingStyle03(props.specificRestaurant.rating, true)}></i>
//                             {ratingLabel03(props.specificRestaurant.rating)}
//                         </span>
//                     </h6>
//                 </div>
//                 <p className="card-text">{props.specificRestaurant.description}</p>
//                 <div className="d-flex justify-content-end pt-2 border-top">
//                     <button className="btn btn-sm btn-primary me-2" onClick={() => props.editRestaurant(props.specificRestaurant.id)}>
//                         <i className="fas fa-pen me-2"></i>
//                         Edit
//                     </button>
//                     <button className="btn btn-sm btn-danger" onClick={() => props.removeRestaurant(props.specificRestaurant.id)}>
//                         <i className="fas fa-trash me-2"></i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// 4/10
// import React from 'react';

// export default function Restaurant04(props){
//     function ratingLabel(parameter){
//         switch(parameter){
//             case '1':
//                 return '1 star';
//             case '2':
//                 return '2 stars';
//             case '3':
//                 return '3 stars';
//             case '4':
//                 return '4 stars';
//             case '5':
//                 return '5 stars';
//             default:
//                 return 'Error! Unknown rating. Please, try again.';
//         }
//     }

//     function ratingStyle04(parameter, icon){
//         switch(parameter){
//             case '1':
//                 return icon ? 'Icon04' : 'success';
//             case '2':
//                 return icon ? 'Icon04' : 'success';
//             case '3':
//                 return icon ? 'Icon04' : 'success';
//             case '4':
//                 return icon ? 'Icon04' : 'success';
//             case '5':
//                 return icon ? 'Icon04' : 'success';
//             default:
//                 return 'Error. Rating unknown! Please, try again.';
//         }
//     }

//     return(
//         <div className={'card mb-2 shadow-sm border-' + ratingStyle04(props.specificRestaurant.rating)
//     }
//     >
//         <div className="card-body">
//             <div className="d-flex justify-content-between">
//                 <h4 className="card-title">
//                     <span className="bardg bg-secondary me-1">
//                         {props.specificRestaurant.id}
//                     </span>
//                     - {props.specificRestaurant.title}
//                 </h4>
//                 <h6> Rating:
//                     <span className={'ms-1 text-' + ratingStyle04(props.specificRestaurant.rating)}>
//                         <i className={'me-1 far fa-' + ratingStyle04(props.specificRestaurant.rating, true)}></i>
//                         {ratingLabel(props.specificRestaurant.rating)}
//                     </span>
//                 </h6>
//             </div>
//             <p className="card-text">{props.specificRestaurant.description}</p>
//             <div className="d-flex justify-content-end pt-2 m-0 border-top">
//                 <button className="btn btn-sm btn-primary me-2" onClick={() => props.editRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-pen me-2"></i>
//                     Edit
//                 </button>
//                 <button className="btn btn-sm btn-danger" onClick={() => props.removeRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-trash me-2"></i> 
//                 </button>
//             </div>
//         </div>
//     </div>
//     );
// }

// 5/10
// import React from 'react';

// export default function Restaurant05(props) {
//     function ratingLabel05(parameter) {
//         switch (parameter) {
//             case '1':
//                 return '1 star';
//             case '2':
//                 return '2 stars';
//             case '3':
//                 return '3 stars';
//             case '4':
//                 return '4 stars';
//             case '5':
//                 return '5 stars';
//             default:
//                 return 'Error! Rating unknown. Please, try again.';
//         }
//     }

//     function ratingStyle05(parameter, icon) {
//         switch (parameter) {
//             case '1':
//                 return icon ? 'IconHere' : 'success';
//             case '2':
//                 return icon ? 'IconHere' : 'success';
//             case '3':
//                 return icon ? 'IconHere' : 'success';
//             case '4':
//                 return icon ? 'IconHere' : 'success';
//             case '5':
//                 return icon ? 'IconHere' : 'success';
//             default:
//                 return 'Error. Rating unknown. Please, try again';
//         }
//     }

//     return (<div className={'card mb-2 shadow-sm border-' + ratingStyle05(props.specificRestaurant.rating)
//     }
//     >
//         <div className="card-body">
//             <div className="d-flex justify-content-between">
//                 <h4 className="card-title">
//                     <span className="badge bg-secondary me-1">
//                         {props.specificRestaurant.id}
//                     </span>
//                     - {props.specificRestaurant.title}
//                 </h4>
//                 <h6> Rating:
//                     <span className={'ms-1 text-' + ratingStyle05(props.specificRestaurant.rating)}>
//                         <i className={'me-1 far fa-' + ratingStyle05(props.specificRestaurant.rating, true)}></i>
//                         {ratingLabel05(props.specificRestaurant.rating)}
//                     </span>
//                 </h6>
//             </div>
//             <p className="card-text">{props.specificRestaurant.description}</p>
//             <div className="d-flex justify-content-end pt-2 m-0 border-top">
//                 <button className="btn btn-sm btn-primary me-2" onClick={() => props.editRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-pen me-2"></i>
//                     Edit
//                 </button>
//                 <button className="btn btn-sm btn-danger" onClick={() => props.removeRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-trash me-2"></i>
//                 </button>
//             </div>
//         </div>
//     </div>
//     );
// }

// 6/10
// import React from 'react';
// export default function Restaurant06(props) {
//     function ratingLabel06(parameter){
//         switch(parameter){
//             case '1':
//                 return '1 star';
//             case '2':
//                 return '2 stars';
//             case '3':
//                 return '3 stars';
//             case '4':
//                 return '4 stars';
//             case '5':
//                 return '5 stars';
//             default:
//                 return 'Error! Unknown rating. Please, try again.';
//         }
//     }

//     function ratingStyle06(parameter, icon){
//         switch(parameter){
//             case '1':
//                 return icon ? 'IconHere' : 'success';
//             case '2':
//                 return icon ? 'IconHere' : 'success';
//             case '3':
//                 return icon ? 'IconHere' : 'success';
//             case '4':
//                 return icon ? 'IconHere' : 'success';
//             case '5':
//                 return icon ? 'IconHere' : 'success';
//             default:
//                 return 'Error. Rating unknown. Please, try again';
//         }
//     }

//     return(
//         <div className={'card mb-2 shadow-sm border-' + ratingStyle06(props.specificRestaurant.rating)
//     }
//     >
//         <div className="card-body">
//             <div className="d-flex justify-content-between">
//                 <h4 className="card-title">
//                     <span className="badge bg-secondary me-1">
//                         {props.specificRestaurant.id}
//                     </span>
//                     - {props.specificRestaurant.title}
//                 </h4>
//                 <h6> Rating:
//                     <span className={'ms-1 text-' + ratingStyle06(props.specificRestaurant.rating)}>
//                         <i className={'me-1 far fa-' + ratingStyle06(props.specificRestaurant.rating, true)}></i>
//                     </span>
//                 </h6>
//             </div>
//             <p className="card-text">{props.specificRestaurant.description}</p>
//             <div className="d-flex justify-content-end pt-2 m-0 border-top">
//                 <button className="btn btn-sm btn-primary me-2" onClick={() => props.editRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-pen me-2"></i>
//                     Edit
//                 </button>
//                 <button className="btn btn-sm btn-danger" onClick={() => props.removeRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-trash me-2"></i>
//                 </button>
//             </div>
//         </div>
//     </div>
//     );
// }

// 7/10
// import React from 'react';

// export default function Restaurant07(props) {
//     function ratingLabel07(parameter) {
//         switch (parameter) {
//             case '1':
//                 return '1 star';
//             case '2':
//                 return '2 stars';
//             case '3':
//                 return '3 stars';
//             case '4':
//                 return '4 stars';
//             case '5':
//                 return '5 stars';
//             default:
//                 return 'Error! Unknown rating. Please, try again.';
//         }
//     }

//     function ratingStyle07(parameter, icon) {
//         switch (parameter) {
//             case '1':
//                 return icon ? 'IconGoesHere' : 'success';
//             case '2':
//                 return icon ? 'IconGoesHere' : 'success';
//             case '3':
//                 return icon ? 'IconGoesHere' : 'success';
//             case '4':
//                 return icon ? 'IconGoesHere' : 'success';
//             case '5':
//                 return icon ? 'IconGoesHere' : 'success';
//             default:
//                 return 'Error. Rating unknown. Please, try again.';
//         }
//     }

//     return (<div className={'card mb-2 shadow-sm border-' + ratingStyle07(props.specificRestaurant.rating)
//     }
//     >
//         <div className="card-body">
//             <div className="d-flex justify-content-between">
//                 <h4 className="card-title">
//                     <span className="badge bg-secondary me-1">
//                         {props.specificRestaurant.id}
//                         - {props.specificRestaurant.title}
//                     </span>
//                 </h4>
//                 <h6> Rating:
//                     <span className={'ms-1 text-' + ratingStyle07(props.specificRestaurant.rating)}>

//                     </span>
//                 </h6>
//             </div>
//             <p className="card-text">{props.specificRestaurant.description}</p>
//             <div className="d-flex justify-content-end pt-2 m-0 border-top">
//                 <button className="btn btn-sm btn-primary me-2" onClick={() => props.editRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-pen me-2"></i>
//                     Edit
//                 </button>
//                 <button className="btn btn-sm btn-danger" onClick={() => props.removeRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-trash me-2"></i>
//                 </button>
//             </div>
//         </div>
//     </div>
//     );
// }

// 8/10
// import React from 'react';

// export default function Restaurant08(props) {
//     function ratingLabel08(parameter) {
//         switch (parameter) {
//             case '1':
//                 return '1 star';
//             case '2':
//                 return '2 stars';
//             case '3':
//                 return '3 stars';
//             case '4':
//                 return '4 stars';
//             case '5':
//                 return '5 stars';
//             default:
//                 return 'Error. Rating unknown. Please, try again.';
//         }
//     }

//     function ratingStyle08(parameter, icon) {
//         switch (parameter) {
//             case '1':
//                 return icon ? 'IconHere' : 'success';
//             case '2':
//                 return icon ? 'IconHere' : 'success';
//             case '3':
//                 return icon ? 'IconHere' : 'success';
//             case '4':
//                 return icon ? 'IconHere' : 'success';
//             case '5':
//                 return icon ? 'IconHere' : 'success';
//             default:
//                 return 'Error! Unknown icon. Please, try again.';
//         }
//     }

//     return (<div className={'card mb-2 shadow-sm border-' + ratingStyle08(props.specificRestaurant.rating)
//     }
//     >
//         <div className="card-body">
//             <div className="d-flex justify-content-between">
//                 <h4 className="card-title">
//                     <span className="badge bg-secondary me-1">
//                         {props.specificRestaurant.id}
//                     </span>
//                     - {props.specificRestaurant.title}
//                 </h4>
//                 <h6> Rating:
//                     <span className={'ms-1 text-' + ratingStyle08(props.specificRestaurant.rating)}>
//                         <i className={'me-1 far fa-' + ratingStyle08(props.specificRestaurant.rating, true)}></i>
//                         {ratingLabel08(props.specificRestaurant.rating)}
//                     </span>
//                 </h6>
//             </div>
//             <p className="card-text">{props.specificRestaurant.description}</p>
//             <div className="d-flext justify-content-end pt-2 border-top">
//                 <button className="btn btn-sm btn-primary me-2" onClick={() => props.editRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-pen me-2"></i>
//                     Edit
//                 </button>
//                 <button className="btn btn-sm btn-danger" onClick={() => props.removeRestaurant(props.speficicRestaurant.id)}>
//                     <i className="fas fa-trash me-2"></i>
//                 </button>
//             </div>
//         </div>
//     </div>
//     );
// }

// 9/10
// import React from 'react';

// export default function Restaurant09(props) {
//     function ratingLabel09(parameter) {
//         switch (parameter) {
//             case '1':
//                 return '1 star';
//             case '2':
//                 return '2 stars';
//             case '3':
//                 return '3 stars';
//             case '4':
//                 return '4 stars';
//             case '5':
//                 return '5 stars';
//             default:
//                 return 'Error! Unknown rating. Please, try again.';
//         }
//     }

//     function ratingStyle09(parameter, icon) {
//         switch (parameter) {
//             case '1':
//                 return icon ? 'IconGoesHere' : 'success';
//             case '2':
//                 return icon ? 'IconHere' : 'success';
//             case '3':
//                 return icon ? 'IconHere' : 'success';
//             case '4':
//                 return icon ? 'IconHere' : 'success';
//             case '5':
//                 return 'Error. Unknown icon. Please, try again.';
//         }
//     }

//     return (
//         <div className={'card mb-2 shadow-sm border-' + ratingStyle09(props.specificRestaurant.rating)
//         }
//         >
//             <div className="card-body">
//                 <div className="d-flex justify-content-between">
//                     <h4 className="card-title">
//                         <span className="badge bg-secondary me-1">
//                             {props.specificRestaurant.id}
//                             - {props.specificRestaurant.title}
//                         </span>
//                     </h4>
//                     <h6> Rating:
//                         <span className={'ms-1 text-' + ratingStyle09(props.specificRestaurant.rating)}>
//                             <i className={'me-1 far fa-' + ratingStyle08(props.restaurant.rating, true)}></i>
//                             {ratingLabel09(props.specificRestaurant.rating)}
//                         </span>
//                     </h6>
//                 </div>
//                 <p className="card-text">{props.specificRestaurant.description}</p>
//                 <div className="d-flex justify-content-end pt-2 m-0 border-top">
//                     <button className="btn btn-sm btn-primary me-2" onClick={() => props.editRestaurant(props.specificRestaurant.id)}>
//                         <i className="fas fa-pen me-2"></i>
//                         Edit
//                     </button>
//                     <button className="btn btn-sm btn-danger" onClick={() => props.removeRestaurant(props.specificRestaurant.id)}>
//                         <i className="fas fa-trash me-2"></i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// 10/10
// import React from 'react';

// export default function Restaurant10(props) {
//     function ratingLabel10(parameter) {
//         switch (parameter) {
//             case '1':
//                 return '1 star';
//             case '2':
//                 return '2 stars';
//             case '3':
//                 return '3 stars';
//             case '4':
//                 return '4 stars';
//             case '5':
//                 return '5 stars';
//             default:
//                 return 'Error! Unknown rating. Please, try again.';
//         }
//     }

//     function ratingStyle10(parameter, icon) {
//         switch (parameter) {
//             case '1':
//                 return icon ? 'IconHere' : 'success';
//             case '2':
//                 return icon ? 'IconHere' : 'success';
//             case '3':
//                 return icon ? 'IconHere' : 'success';
//             case '4':
//                 return icon ? 'IconHere' : 'success';
//             case '5':
//                 return icon ? 'IconHere' : 'success';
//             default:
//                 return 'Error. Unknown icon. Please, re-check this information and try again.';
//         }
//     }

//     return (<div className={'card mb-2 shadow-sm border-' + ratingStyle10(props.specificRestaurant.rating)
//     }
//     >
//         <div className="card-body">
//             <div className="d-flex justify-content-between">
//                 <h4 className="card-title">
//                     <span className="badge bg-secondary me-1">
//                         {props.specificRestaurant.id}
//                     </span>
//                     - {props.specificRestaurant.title}
//                 </h4>
//                 <h6> Rating:
//                     <span className={'ms-1 text-' + ratingStyle10(props.specificRestaurant.rating)}>
//                         <i className={'me-1 far fa-' + ratingStyle10(props.specificRestaurant.rating, true)}></i>
//                         {ratingLabel10(props.specificRestaurant.rating)}
//                     </span>
//                 </h6>
//             </div>
//             <p className="card-text">{props.specificRestaurant.description}</p>
//             <div className="d-flex justify-content-end pt-2 m-0 border-top">
//                 <button className="btn btn-sm btn-primary me-2" onClick={() => props.editRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-pen me-2"></i>
//                 </button>
//                 <button className="btn btn-sm btn-danger" onClick={() => props.removeRestaurant(props.specificRestaurant.id)}>
//                     <i className="fas fa-trash me-2"></i>
//                 </button>
//             </div>
//         </div>
//     </div>
//     );
// }

// RestaurantForm.js
// 1/10
// 02/10
// 03/10
// 04/10
// 05/10
// 06/10
// 07/10
// 08/10
// 09/10
// 10/10