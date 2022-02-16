export default authGuard = async (to, from, next) => {
    console.log("here", this.$auth0)
  const authService = await this.$auth0

    // If the user is authenticated, continue with the route
    if (authService.getUser() != undefined) {
      return next();
    }

    // Otherwise, log in
    authService.loginWithPopup({});
  };