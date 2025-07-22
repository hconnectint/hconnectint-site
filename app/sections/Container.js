"use client";

import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div className={` px-6 md:px-4 lg:px-4 mx-auto xl:px-0 ${className}`}>
      {children}
    </div>
  );
}
