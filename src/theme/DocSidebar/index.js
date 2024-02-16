import React from "react";
import DocSidebar from "@theme-original/DocSidebar";

export default function DocSidebarWrapper(props) {
  return (
    <div className="sidebar">
      <DocSidebar {...props} />
    </div>
  );
}
