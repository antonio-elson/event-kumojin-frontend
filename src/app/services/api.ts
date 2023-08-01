import axios from "axios";

export const timeZoneId = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const getUrlApi = axios.create({
   baseURL: "http://localhost:8080",
   headers: {'zone': timeZoneId} 
});