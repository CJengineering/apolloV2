export interface Icon {
    color: string;
    svgPath: string;
  }
  
  export interface SubLink {
    title: string;
    href: string;
  }
  
  export interface SidebarLinkGroupProps {
    children: (handleClick: () => void, openGroup: boolean) => React.ReactNode;
    open: boolean;
  }
  
  export interface SidebarLinkSubgroupProps {
    children: React.ReactNode;
    title: string;
    open: boolean;
  }
  
  export interface Section {
    title: string;
    segments: string;
    icon: Icon;
    subLinks?: SubLink[];
    href?: string;
  }
  
  export interface SidebarContent {
    sections: Section[];
  }
  