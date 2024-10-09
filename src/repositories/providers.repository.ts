export const useProvidersRepository = () => {

    const getProviderById = (id: number) => {
        return fetch(`http://revel-backend/api/provider/${id}`)
    }

    return {
        getProviderById
    }
}