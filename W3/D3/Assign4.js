const getRoute = function(role, isLoggedIn) {
  if (!isLoggedIn) {
    return "/login";
  } else {
    switch (role) {
      case "admin":
        return "/admin";
      case "student":
        return "/student";
      case "college":
        return "/college";
      case "proctor":
        return "/proctor";
      default:
        return "/denied";
    }
  }
};


console.log("LoggedIn:", getRoute("login", false));       
console.log("Admin User:", getRoute("admin", true));        
console.log("Student User:", getRoute("student", true));    
console.log("Unknown Role:", getRoute("guest", true));