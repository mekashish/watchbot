// import React, { Fragment } from 'react'
// import "./Registration.css";

// const Registration = () => {
//     // document.getElementById('name').addEventListener("input", () => { checkError("name") });
//     // document.getElementById('Uname').addEventListener("input", () => { checkError("Uname") });
//     // document.getElementById('Password').addEventListener("input", () => { checkError("Password") });
//     // document.getElementById('Cpassword').addEventListener("input", () => { checkError("Cpassword") });
//     // document.getElementById('number').addEventListener("input", () => { checkError("number") });
//     // document.getElementById('email').addEventListener("input", () => { checkError("email") });

//     // // main
//     // function checkError(input) {
//     //     let ele1 = document.getElementById('name').value;
//     //     let ele2 = document.getElementById('Uname').value;
//     //     let ele3 = document.getElementById('Password').value;
//     //     let ele4 = document.getElementById('Cpassword').value;
//     //     let num = document.getElementById('number').value;
//     //     let em = document.getElementById("email").value;
//     //     let iCheck = document.getElementsByClassName('fa-check-circle');
//     //     let iEcal = document.getElementsByClassName('fa-exclamation');
//     //     let err = document.getElementsByClassName('errorM');
//     //     switch (input) {
//     //         case "name":
//     //             if (ele1.length < 6) {
//     //                 iCheck[0].classList.remove('success');
//     //                 err[0].classList.add('error');
//     //                 iEcal[0].classList.add('error');
//     //             } else {
//     //                 iCheck[0].classList.add('success');
//     //                 err[0].classList.remove('error');
//     //                 iEcal[0].classList.remove('error');
//     //             }
//     //             break;
//     //         case "Uname":
//     //             if (ele2.length < 4) {

//     //                 err[1].classList.add('error');
//     //                 iEcal[1].classList.add('error');
//     //                 iCheck[1].classList.remove('success');

//     //             } else {

//     //                 err[1].classList.remove('error');
//     //                 iEcal[1].classList.remove('error');
//     //                 iCheck[1].classList.add('success');
                    
//     //             }
//     //             break;
//     //         case "email":
//     //             if (em.length < 7 || em.indexOf("@") === -1 || em.indexOf(".") === -1 || !((em.indexOf("in") === -1) ^ (em.indexOf("com") === -1))) {
//     //                 iCheck[2].classList.remove('success');
//     //                 err[2].classList.add('error');
//     //                 iEcal[2].classList.add('error');
//     //             } else {

//     //                 iCheck[2].classList.add('success');
//     //                 err[2].classList.remove('error');
//     //                 iEcal[2].classList.remove('error');
//     //                 // submit = true;
//     //             }
//     //             break;
//     //         case "number":
//     //             if (num.length !== 10) {

//     //                 err[3].classList.add('error');
//     //                 iEcal[3].classList.add('error');
//     //                 iCheck[3].classList.remove('success');
//     //                 // submit = false;

//     //             } else {

//     //                 err[3].classList.remove('error');
//     //                 iEcal[3].classList.remove('error');
//     //                 iCheck[3].classList.add('success');
//     //                 // submit = true;
//     //             }
//     //             break;
//     //         case "Password":
//     //             if (ele3.length < 8 || !((ele3.indexOf('@') === -1) ^ (ele3.indexOf('#') === -1) ^ (ele3.indexOf('&') === -1) ^ (ele3.indexOf('$') === -1))) {
//     //                 err[4].classList.add('error');
//     //                 iEcal[4].classList.add('error');
//     //                 iCheck[4].classList.remove('success');
//     //                 // submit = false;

//     //             } else {

//     //                 err[4].classList.remove('error');
//     //                 iEcal[4].classList.remove('error');
//     //                 iCheck[4].classList.add('success');
//     //                 // submit = true;
//     //             }
//     //             break;
//     //         case "Cpassword":
//     //             if (ele4 !== ele3) {

//     //                 err[5].classList.add('error');
//     //                 iEcal[5].classList.add('error');
//     //                 iCheck[5].classList.remove('success');
//     //                 // submit = false;

//     //             } else {

//     //                 err[5].classList.remove('error');
//     //                 iEcal[5].classList.remove('error');
//     //                 iCheck[5].classList.add('success');
//     //             }
//     //             break;
//     //         default: 
//     //         break;
//     //     }
//     // }

//   return <Fragment>
//         <div className="container">
//             <center className="heading">
//                 <h1>SignUp Form</h1>
//             </center>
//             <div>
//                 <form action="api/v1/Signup" className="form" method="POST">
//                     {/* <div className="tag">
//                         <input type="text" id="name" placeholder="Full Name" required/>
//                         <br/>
//                         <i className="fas fa-check-circle"></i>
//                         <i className="fas fa-exclamation"></i>
//                         <span className="errorM">Name is too short!!!</span>
//                     </div> */}
//                     <div className="tag">
//                         <input type="text" id="Uname" placeholder="UserName" required/>
//                         <br/>
//                         <i className="fas fa-check-circle"></i>
//                         <i className="fas fa-exclamation"></i>
//                         <span className="errorM">UserName is invalid!!!</span>
//                     </div>
//                     {/* <div className="tag">
//                         <input type="text" name="email" id="email" placeholder="Email" required/>
//                         <br/>
//                         <i className="fas fa-check-circle"></i>
//                         <i className="fas fa-exclamation"></i>
//                         <span className="errorM">Eamil is not valid!!!</span>
//                         <br/>
//                     </div> */}

//                     {/* <div className="tag">
//                         <input type="number" name="phoneNo" placeholder="Phone Number" id="number" required/>
//                         <br/>
//                         <i className="fas fa-check-circle"></i>
//                         <i className="fas fa-exclamation"></i>
//                         <span className="errorM">PhoneNumber should contain 10 Numbers</span>
//                     </div>
//                     <br/> */}
//                     <div className="tag">
//                         <input type="password" id="Password" placeholder="Password" required/>
//                         <br/>
//                         <i className="fas fa-check-circle"></i>
//                         <i className="fas fa-exclamation"></i>
//                         <span className="errorM">Password is invalid!! (useAny:'$','&','#,'@')</span>
//                     </div>
//                     {/* <div className="tag">
//                         <a href="/index2.html" id="Password"><button><span>Click here to set password</span></button></a>
//                     </div> */}
//                     <div className="tag">
//                         <input type="password" id="Cpassword" placeholder="Confirm Password" required/>
//                         <br/>
//                         <i className="fas fa-check-circle"></i>
//                         <i className="fas fa-exclamation"></i>
//                         <span className="errorM">Password does not match!!!</span>
//                     </div>

//                     {/* <div id="radiogroup">
//                         <label id="glabel" for="gender">Gender</label>
//                         <div className="radiobtn">
//                             <input type="radio" name="gender" value="male" class="gender" checked/>Male
//                             <input type="radio" name="gender" value="Female" class="gender"/>Female
//                             <input type="radio" name="gender" value="others" class="gender"/>Prefer not to say
//                         </div>
//                     </div> */}

//                     <div className="btn">
//                         <div>
//                             <button type="submit" class="btn btn1" id="button">Register</button>
//                         </div>
//                     </div>
//                     <br/>

//                 </form>
//             </div>
//         </div>
//       </Fragment>
// }

// export default Registration