import { useCarsRepository } from "@/repositories/cars.repository";

export const useCarsDomain = () => {

    const { getCarById } = useCarsRepository()

    const getCarDetail = (id: number) => {
        return getCarById(id)
    }

    return {
        getCarDetail
    }
}