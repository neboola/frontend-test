export const useCustomersRepository = () => {
    
    const getCustomerById = (id: number) => {
        return fetch(`http://revel-backend/api/customers/${id}`)
    }

    return {
        getCustomerById
    }
}