const API_URL = "https://taller-automotriz-backend.vercel.app"

export const listarEntidad = async ( {entidad = "vehiculos"}) => {
    try {
        const respuesta = await fetch(`${API_URL}/${entidad}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
};


