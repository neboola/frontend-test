import { useProvidersRepository } from "@/repositories/providers.repository"

export const useProvidersDomain = () => {

    const { getProviderById } = useProvidersRepository()

    const getProviderDetail = (id: number) => {
        return getProviderById(id)
    }

    return {
        getProviderDetail
    }

}