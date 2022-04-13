const ROOT_URLS_PRODUCTION = {

}

const ROOT_URLS_DEVELOPMENT = {
    API: "http://localhost:6140",
    WEB_URL: "http://localhost:3000"
}

const VEHICLE_TYPES = {
    CAR: "CAR",
    SCOOTER: "SCOOTER",
    BIKE: "BIKE"
};

const UNLOCK_TYPES = {
    MANUAL: "MANUAL"
}

const CURRENCY_TYPES = {
    EUR: "EUR",
    BGN: "BGN",
    USD: "USD"
}

const MENUS = {
    DISCOVER: "DISCOVER",
    RIDES: "RIDES",
    VEHICLES: "VEHICLES",
    PROFILE: "PROFILE",
}

const GOOGLE_API_KEY = "AIzaSyAYQnnCgQuzHGk6WMcbhtOPJHROn5vycE4"

module.exports = {
    AUTHENTICATION_TOKEN_KEY: "x-auth-token",
    ROOT_URLS: ROOT_URLS_DEVELOPMENT,
    VEHICLE_TYPES: VEHICLE_TYPES,
    UNLOCK_TYPES: UNLOCK_TYPES,
    CURRENCY_TYPES: CURRENCY_TYPES,
    MENUS: MENUS,
    GOOGLE_API_KEY: GOOGLE_API_KEY,
}