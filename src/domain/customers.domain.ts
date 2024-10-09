import { useCustomersRepository } from "@/repositories/customers.repository";

export const useCustomersDomain = () => {

    const { getCustomerById } = useCustomersRepository()

    const getCustomerDetail = (id: number) => {
        return getCustomerById(id)
    }

    return {
        getCustomerDetail
    }
}