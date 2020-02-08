declare const config: any

module.exports = {
  API: {
    CHECK_TOKEN: `${config["apiLocalURL"]}/api/Configuration/GetConfiguration`,
    AUTHENTICATE: `${config["apiLocalURL"]}/api/login/auth`,
    GET_DATA_URL: `${config["apiLocalURL"]}/api/IncidentsAssessment/GetIncident/`,
    GET_CATEGORIES_URL: `${config["apiLocalURL"]}/api/categories/getcategoriesbycompany/`,
    GET_CATEGORIES_BY_ID_URL: `${config["apiLocalURL"]}/api/Questions/GetQuestionsByCategory/`,
    UPDATE_DATA_URL: `${config["apiLocalURL"]}/api/IncidentsAssessment/Update/`,
    FINALIZE_DATA_URL: `${config["apiLocalURL"]}/api/IncidentsAssessment/FinalizeIncident/`,
    SEND_ANSWER_URL: `${config["apiLocalURL"]}/api/IncidentsAssessment/Answer/`,
    GET_LIST_PHOTO: `${config["apiLocalURL"]}/api/IncidentsAssessment/Image/List/`,
    GET_PHOTO: `${config["apiLocalURL"]}/api/IncidentsAssessment/Image/Thumbnail/Get/`,
    GET_PHOTO_GALLERY: `${config["apiLocalURL"]}/api/IncidentsAssessment/Image/Get/`,
    UPLOAD_PHOTO_URL: `${config["apiLocalURL"]}/api/IncidentsAssessment/Image/`,
    POST_FORM_URL: `${config["apiLocalURL"]}/api/IncidentsAssessment/Create`,
    GET_COMPANY_BY_ID_URL: `${config["apiLocalURL"]}/api/SalvagesCompanies/GetSalvagesCompanies/`,
    GET_LOCATION_BY_ID_URL: `${config["apiLocalURL"]}/api/SalvagesCompanies/GetSalvageCompanyLocations/`,
    AUTH_URL: `${config["apiLocalURL"]}/api/login/auth`,
    GET_CONFIG: `${config["apiLocalURL"]}/api/Configuration/GetConfiguration`,
    GET_TOWING_COMPANIES: `${config["apiLocalURL"]}/api/TowingCompanies/GetTowingCompanies`,
    UPDATE_TOWING_COMPANIES: `${config["apiLocalURL"]}/api/TowingCompanies/Update/`,
    SET_TOWING_COMPANIES: `${config["apiLocalURL"]}/api/TowingCompanies/Create`,
    GET_ASSESSMENTS: `${config["apiLocalURL"]}/api/IncidentsAssessment/list`,
    GET_TOWTRUCK_DRIVERS: `${config["apiLocalURL"]}/api/TowTruckDrivers/GetTowTruckDrivers`,
    UPDATE_TOWTRUCK_DRIVERS: `${config["apiLocalURL"]}/api/TowTruckDrivers/Update/`,
    SET_TOWTRUCK_DRIVERS: `${config["apiLocalURL"]}/api/TowTruckDrivers/Create`,
    SMS_ASSESSMENT: `${config["apiLocalURL"]}/api/IncidentsAssessment/SendSms/`
  }
}
