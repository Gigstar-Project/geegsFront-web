// import * as React from "react";
// import { useState } from "react";
// import logo from "../Assets/GeegstarLogo.svg";
// import Logo from "../Assets/burnaaa2 1.png";
// import talent1 from "../Assets/Rectangle 17.png";
// import talent2 from "../Assets/davido.png";
// import talent3 from "../Assets/burna.png";
// import talent4 from "../Assets/Bovi.png";
// interface CardProps {
//   imageSrc: string;
//   altText: string;
//   title: string;
//   description: string;
//   buttonText: string;
//   onClick: () => void;
// }
// const PlannerDashboard: React.FC<CardProps> = ({
//   imageSrc,
//   altText,
//   title,
//   description,
//   buttonText,
//   onClick,
// }) => {
//   const [ShowAll, setShowMore] = useState(false);
//
//   const toggleText = () => {
//     setShowMore(!ShowAll);
//   };
//
//   return (
//     <div
//       style={{
//         backgroundColor: "black",
//         minHeight: "100vh",
//         maxWidth: "100%",
//         display: "grid",
//         justifyContent: "center",
//         color: "white",
//       }}
//     >
//       <img
//         src={logo}
//         alt="App Logo"
//         style={{
//           width: "200px",
//           height: "100px",
//           top: "10px",
//           left: "50px",
//         }}
//       />
//       <img
//         src={Logo}
//         alt={Logo}
//         style={{
//           width: "100%",
//           height: "100%",
//           top: "120em",
//         }}
//       />
//       <p
//         style={{
//           fontSize: "50px",
//           top: "10px",
//         }}
//       >
//         {" "}
//         Talents{" "}
//       </p>
//
//       <div
//         onClick={toggleText}
//         style={{
//           cursor: "pointer",
//           color: "white",
//           textDecoration: "underline",
//           top: "30em",
//           right: "50px",
//           alignSelf: "flex-end",
//           marginTop: "10px",
//         }}
//       >
//         {ShowAll ? "Show Less" : "Show All"}
//       </div>
//       <div
//         className="card1"
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           marginLeft: "80px",
//           marginRight: "80px",
//         }}
//       >
//         <div
//           style={{
//             width: "40%",
//             height: "100%",
//             background: "#2B2525",
//             borderRadius: 32,
//             alignItems: "center",
//             marginRight: "30px",
//           }}
//         >
//           <div
//             className="card-text"
//             style={{
//               marginTop: "20px",
//               marginLeft: "30px",
//             }}
//           >
//             <img src={talent1} alt={talent1} />
//             <div style={{ display: "flex", flexDirection: "row" }}>
//               <h2>BasketMouth</h2>{" "}
//               <h1 style={{ color: "#BE9694", fontSize: 16 }}> Comedian</h1>
//             </div>
//             <p>
//               BasketMouth is one of the leading comedian in Nigeria that has
//               served the country for over 20 years.
//             </p>
//             <button
//               onClick={onClick}
//               style={{
//                 width: "100px",
//                 height: "40px",
//                 background: "white",
//                 borderRadius: 10,
//               }}
//             >
//               Book Talents
//             </button>
//           </div>
//         </div>
//         <div
//           style={{
//             width: "40%",
//             marginRight: "30px",
//             height: "100%",
//             background: "#2B2525",
//             borderRadius: 32,
//             alignItems: "center",
//           }}
//         >
//           <div
//             className="card-text"
//             style={{
//               marginTop: "20px",
//               marginLeft: "30px",
//             }}
//           >
//             <img src={talent2} alt={talent2} />
//             <h2>Davido</h2>{" "}
//             <h1 style={{ color: "#BE9694", fontSize: 16 }}> Artist</h1>
//             <p>
//               Davido is one of the leading comedian in Nigeria that has served
//               the country for over 20 years.
//             </p>
//             <button
//               onClick={onClick}
//               style={{
//                 width: "100px",
//                 height: "40px",
//                 background: "white",
//                 borderRadius: 10,
//               }}
//             >
//               Book Talents
//             </button>
//           </div>
//         </div>
//         <div
//           style={{
//             width: "40%",
//             marginRight: "30px",
//             height: "100%",
//             background: "#2B2525",
//             borderRadius: 32,
//             alignItems: "center",
//           }}
//         >
//           <div
//             className="card-text"
//             style={{
//               marginTop: "20px",
//               marginLeft: "30px",
//             }}
//           >
//             <img src={talent3} alt={talent3} />
//             <h2>Burna Boy</h2>{" "}
//             <h1 style={{ color: "#BE9694", fontSize: 16 }}> Artist</h1>
//             <p>
//               Burna Boy is one of the leading comedian in Nigeria that has
//               served the country for over 20 years.
//             </p>
//             <button
//               onClick={onClick}
//               style={{
//                 width: "100px",
//                 height: "40px",
//                 background: "white",
//                 borderRadius: 10,
//               }}
//             >
//               Book Talents
//             </button>
//           </div>
//         </div>
//         <div
//           style={{
//             width: "40%",
//             marginRight: "30px",
//             height: "100%",
//             background: "#2B2525",
//             borderRadius: 32,
//             alignItems: "center",
//           }}
//         >
//           <div
//             className="card-text"
//             style={{
//               marginTop: "20px",
//               marginLeft: "30px",
//             }}
//           >
//             <img src={talent4} alt={talent4} />
//             <h2>Bovi</h2>{" "}
//             <h1 style={{ color: "#BE9694", fontSize: 16 }}> Comedian</h1>
//             <p>
//               Bovi is one of the leading comedian in Nigeria that has served the
//               country for over 20 years.
//             </p>
//             <button
//               onClick={onClick}
//               style={{
//                 width: "100px",
//                 height: "40px",
//                 background: "white",
//                 borderRadius: 10,
//               }}
//             >
//               Book Talents
//             </button>
//           </div>
//         </div>
//       </div>
//       <div
//         className="cards"
//         style={{
//           display: "flex",
//           marginLeft: "80px",
//           marginRight: "80px",
//           marginTop: "40px",
//         }}
//       >
//         <div
//           style={{
//             width: "40%",
//             marginRight: "30px",
//             height: "100%",
//             background: "#2B2525",
//             borderRadius: 32,
//             alignItems: "center",
//           }}
//         >
//           <div
//             className="card-text"
//             style={{
//               marginTop: "20px",
//               marginLeft: "30px",
//             }}
//           >
//             <img src={talent1} alt={talent1} />
//             <h2>BasketMouth</h2>{" "}
//             <h1 style={{ color: "#BE9694", fontSize: 16 }}> Comedian</h1>
//             <p>
//               BasketMouth is one of the leading comedian in Nigeria that has
//               served the country for over 20 years.
//             </p>
//             <button
//               onClick={onClick}
//               style={{
//                 width: "100px",
//                 height: "40px",
//                 background: "white",
//                 borderRadius: 10,
//               }}
//             >
//               Book Talents
//             </button>
//           </div>
//         </div>
//         <div
//           style={{
//             width: "40%",
//             marginRight: "30px",
//             height: "100%",
//             background: "#2B2525",
//             borderRadius: 32,
//             alignItems: "center",
//           }}
//         >
//           <div
//             className="card-text"
//             style={{ marginTop: "20px", marginLeft: "30px" }}
//           >
//             <img src={talent2} alt={talent2} />
//             <h2>Davido</h2>{" "}
//             <h1 style={{ color: "#BE9694", fontSize: 16 }}> Artist</h1>
//             <p>
//               Davido is one of the leading comedian in Nigeria that has served
//               the country for over 20 years.
//             </p>
//             <button
//               onClick={onClick}
//               style={{
//                 width: "100px",
//                 height: "40px",
//                 background: "white",
//                 borderRadius: 10,
//               }}
//             >
//               Book Talents
//             </button>
//           </div>
//         </div>
//         <div
//           style={{
//             width: "40%",
//             marginRight: "30px",
//             height: "100%",
//             background: "#2B2525",
//             borderRadius: 32,
//             alignItems: "center",
//           }}
//         >
//           <div
//             className="card-text"
//             style={{ marginTop: "20px", marginLeft: "30px" }}
//           >
//             <img src={talent3} alt={talent3} />
//             <h2>Burna Boy</h2>{" "}
//             <h1 style={{ color: "#BE9694", fontSize: 16 }}> Artist</h1>
//             <p>
//               Burna Boy is one of the leading comedian in Nigeria that has
//               served the country for over 20 years.
//             </p>
//             <button
//               onClick={onClick}
//               style={{
//                 width: "100px",
//                 height: "40px",
//                 background: "white",
//                 borderRadius: 10,
//               }}
//             >
//               Book Talents
//             </button>
//           </div>
//         </div>
//         <div
//           style={{
//             width: "40%",
//             marginRight: "30px",
//             height: "100%",
//             background: "#2B2525",
//             borderRadius: 32,
//             alignItems: "center",
//           }}
//         >
//           <div
//             className="card-text"
//             style={{ marginTop: "20px", marginLeft: "30px" }}
//           >
//             <img src={talent4} alt={talent4} />
//             <h2>Bovi</h2>{" "}
//             <h1 style={{ color: "#BE9694", fontSize: 16 }}> Comedian</h1>
//             <p>
//               Bovi is one of the leading comedian in Nigeria that has served the
//               country for over 20 years.
//             </p>
//             <button
//               onClick={onClick}
//               style={{
//                 width: "100px",
//                 height: "40px",
//                 background: "white",
//                 borderRadius: 10,
//               }}
//             >
//               Book Talents
//             </button>
//           </div>
//         </div>
//       </div>
//       <p style={{ fontSize: "50px" }}> Manage Bookings </p>
//       <div style={{ marginLeft: "50px" }}>
//         <div
//           style={{
//             backgroundColor: "#153818",
//             minHeight: "50vh",
//             justifyContent: "center",
//             color: "white",
//             borderRadius: "50px",
//             width: "100em",
//
//             alignItems: "center",
//           }}
//         >
//           <div style={{ marginLeft: "50px" }}>
//             <p style={{ fontSize: "50px", top: "10px" }}> Accepted Bookings </p>
//
//             <div
//               onClick={toggleText}
//               style={{
//                 cursor: "pointer",
//                 color: "white",
//                 textDecoration: "underline",
//                 right: "50px",
//                 marginRight: "2px",
//               }}
//             >
//               {ShowAll ? "Show Less" : "Show All"}
//             </div>
//             <div className="card-text">
//               <img src={talent4} alt={talent4} />
//               <h2>Bovi</h2>{" "}
//               <h1 style={{ color: "#BE9694", fontSize: 16 }}> Comedian</h1>
//               <p>
//                 Bovi is one of the leading comedian in Nigeria that has served
//                 the country for over 20 years.
//               </p>
//               <button
//                 onClick={onClick}
//                 style={{
//                   width: "100px",
//                   height: "40px",
//                   background: "white",
//                   borderRadius: 10,
//                 }}
//               >
//                 View Bookings Details
//               </button>
//               <button
//                 onClick={onClick}
//                 style={{
//                   width: "100px",
//                   height: "40px",
//                   background: "white",
//                   borderRadius: 10,
//                 }}
//               >
//                 Make Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//
//       <div
//         style={{
//           backgroundColor: "rgba(255, 0, 0, 0.30)",
//           minHeight: "50vh",
//           justifyContent: "center",
//           marginTop: "100px",
//           marginLeft: "50px",
//           color: "white",
//           borderRadius: "50px",
//           width: "100em",
//         }}
//       >
//         <p style={{ fontSize: "50px", top: "10px" }}> Declined Bookings </p>
//         <div
//           onClick={toggleText}
//           style={{
//             cursor: "pointer",
//             color: "white",
//             textDecoration: "underline",
//             top: "30em",
//             right: "50px",
//             alignSelf: "flex-end",
//             marginTop: "10px",
//           }}
//         >
//           {ShowAll ? "Show Less" : "Show All"}
//         </div>
//         <div style={{}}>
//           <div className="card-text">
//             <img src={talent1} alt={talent1} />
//             <h2>BasketMouth</h2>{" "}
//             <h1 style={{ color: "#BE9694", fontSize: 16 }}> Comedian</h1>
//             <p>
//               BasketMouth is one of the leading comedian in Nigeria that has
//               served the country for over 20 years.
//             </p>
//             <button
//               onClick={onClick}
//               style={{
//                 width: "100px",
//                 height: "40px",
//                 background: "white",
//                 borderRadius: 10,
//               }}
//             >
//               Book Again
//             </button>
//             <button
//               onClick={onClick}
//               style={{
//                 width: "100px",
//                 height: "40px",
//                 background: "white",
//                 borderRadius: 10,
//               }}
//             >
//               Remove
//             </button>
//           </div>
//           <img src={talent2} alt={talent2} />
//           <h2>Davido</h2>{" "}
//           <h1 style={{ color: "#BE9694", fontSize: 16 }}> Artist</h1>
//           <p>
//             Davido is one of the leading comedian in Nigeria that has served the
//             country for over 20 years.
//           </p>
//           <button
//             onClick={onClick}
//             style={{
//               width: "100px",
//               height: "40px",
//               background: "white",
//               borderRadius: 10,
//             }}
//           >
//             Book Again
//           </button>
//           <button
//             onClick={onClick}
//             style={{
//               width: "100px",
//               height: "40px",
//               background: "white",
//               borderRadius: 10,
//             }}
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//
//       <div
//         style={{
//           backgroundColor: "#153818",
//           minHeight: "50vh",
//           justifyContent: "center",
//           marginTop: "100px",
//           marginLeft: "50px",
//           color: "white",
//           borderRadius: "50px",
//           width: "100em",
//         }}
//       >
//         <p
//           style={{
//             fontSize: "50px",
//             top: "10px",
//           }}
//         >
//           {" "}
//           Accepted Bookings{" "}
//         </p>
//         <div
//           onClick={toggleText}
//           style={{
//             cursor: "pointer",
//             color: "white",
//             textDecoration: "underline",
//             top: "30em",
//             right: "50px",
//             alignSelf: "flex-end",
//             marginTop: "10px",
//           }}
//         >
//           {ShowAll ? "Show Less" : "Show All"}
//         </div>
//         <div className="card-text">
//           <img src={talent4} alt={talent4} />
//           <h2>Bovi</h2>{" "}
//           <h1 style={{ color: "#BE9694", fontSize: 16 }}> Comedian</h1>
//           <p>
//             Bovi is one of the leading comedian in Nigeria that has served the
//             country for over 20 years.
//           </p>
//           <button
//             onClick={onClick}
//             style={{
//               width: "100px",
//               height: "40px",
//               background: "white",
//               borderRadius: 10,
//             }}
//           >
//             Withdraw Bookings{" "}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default PlannerDashboard;
