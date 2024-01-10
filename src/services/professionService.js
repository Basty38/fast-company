import httpService from "./httpService.js";

const professionEndpoint = "profession/";

const professionService = {
    get: async () => {
        const { data } = await httpService.get(professionEndpoint);
        return data;
    }
};

export default professionService;
