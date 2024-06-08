import React from "react";

function Layout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>{modal}</div>
      <div>{children}</div>
    </>
  );
}

export default Layout;
