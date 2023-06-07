
var keycloak = new Keycloak("/keycloak.json");
keycloak.init({ onLoad: 'login-required' }).then((isAuthenticated) => {
    document.querySelector("#preloader").style.display = "none";
    localStorage.setItem("token", keycloak.token)
    localStorage.setItem("username", keycloak.idTokenParsed.preferred_username)

    if (keycloak.hasRealmRole("CLP")) {
        localStorage.setItem("userRole", "CLP")
        if (window.localStorage.getItem("activeTab") == null)
            localStorage.setItem("activeTab", "home");
    }
    else if (keycloak.hasRealmRole("MLP")) {
        localStorage.setItem("userRole", "MLP")
    }
    else if (keycloak.hasRealmRole("ALP")) {
        localStorage.setItem("userRole", "ALP")
        if (window.localStorage.getItem("activeTab") == null)
            localStorage.setItem("activeTab", "clinic");
    }
    else if (keycloak.hasRealmRole("ELP")) {
        window.localStorage.setItem("userRole", "ELP")
        if (window.localStorage.getItem("activeTab") == null)
            localStorage.setItem("activeTab", "successOrder");
    }
    window.dispatchEvent(new Event("storage"));

}).catch(function () {
    alert('failed to initialize');
});

