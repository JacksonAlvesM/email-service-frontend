import { useMutation } from "@tanstack/react-query";
import { PersonData } from "../interfaces/person-data";
import axios from "axios";

const postData = (data: PersonData) => {
    return axios.post("", data);
}

export function userIdentityMutation(){
    const{ mutate, isSuccess, isError } = useMutation({
        mutationFn: (data: PersonData) => postData(data)
    })

    return{
        mutate,
        isSuccess,
        isError
    }
}