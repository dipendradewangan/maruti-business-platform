import { API_BASE_URL } from "./api"

export const getLeads = async ()=>{
    const response = await fetch(`${API_BASE_URL}/leads`);

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "Failed to fetch leads");
    }

    return data;
}