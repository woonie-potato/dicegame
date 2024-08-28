import React from "react";

function Button({onClick, children}) {
  return <button onClick={onClick}>{children}</button>
}

export default Button;

// function Button({ children, onClick, className, style }) {
//   return (
//     <button onClick={onClick} className={className} style={style}>
//       {children}
//     </button>
//   );
// }


