import { Cap } from "@/src/model/cap";
import { apiClient } from "../apiClient"

export class capClient extends apiClient{
    async fetchCap(): Promise<Cap[]>{
        let response = await this.axiosInstance.get<Cap[]>('cap');
        if(response)
            return response.data;
        else
            throw new Error ('Error fetching api');
    }
}