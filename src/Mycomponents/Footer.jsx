import React from "react";
export const Footer = () => {
  var cud = new Date();
  var time = cud.getFullYear();

  return (
    <div className=" text-light ">
      <p className="text-center bg-dark footer">Copyright &copy;{time}</p>
    </div>
  );
};
