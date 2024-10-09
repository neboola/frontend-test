export const useCarsRepository = () => {

    const getCarById = (id: number) => {
        return fetch(`http://revel-backend/api/cars/${id}`)
    }

    return {
        getCarById
    }
}