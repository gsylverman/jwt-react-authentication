export const navItems = {
  items: [
    { 
      title: "Home",
      icon: "fas fa-clipboard-list",
      url: "/",
      restricted: false
    },
    { 
      title: "Sign In",
      icon: "fas fa-sign-in-alt",
      url: "login",
      restricted: true
    },
    { 
      title: "Register",
      icon: "fas fa-clipboard-check",
      url: "register",
      restricted: true
    },

  ],
  admin: [
    {
      title: "Sign Out",
      icon: "fas fa-sign-out-alt",
      url: "logout",
      restricted: true
    },
    {
      title: "Admin",
      icon: "fas fa-user-cog",
      url: "admin",
      restricted: true
    }
  ]
}