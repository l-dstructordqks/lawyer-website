import { SERVICES } from "./services"

export function generateServicesSection( id ) {
    const service = SERVICES[id];
    return service;
}