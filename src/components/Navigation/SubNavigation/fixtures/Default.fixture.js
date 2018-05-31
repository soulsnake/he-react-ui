import SubNavigation from "../";

export default {
  component: SubNavigation,
  url: "/feedback",
  props: {
    item: {
      key: "PARENT",
      title: "Parent title",
      label: "Parent",
      route: "/parent",
      badge: "FREE",
      items: [
        {
          key: "MAIN",
          label: "Main",
          route: "/parent"
        },
        {
          key: "SECONDARY",
          label: "Secondary",
          route: "/parent/secondary"
        }
      ]
    },
    locations: ["Location A", "Location B"].map(location => ({
      value: location,
      label: location
    })),
    logoutRoute: "/logout"
  }
};
