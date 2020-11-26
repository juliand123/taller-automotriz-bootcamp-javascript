//const API_URL = "https://taller-automotriz-backend-react.vercel.app"
const API_URL = "http://localhost:5000"

export const listarEntidad = async ({ entidad = "vehiculos" }) => {
    try {
        const respuesta = await fetch(`${API_URL}/${entidad}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
};

export const obtenerUno= async ({ entidad = "vehiculos", idObjeto = null }) => {
    if (idObjeto === null || !entidad ) {
            return{};
    }
    try {
        const respuesta = await fetch(`${API_URL}/${entidad}/${idObjeto}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
};



export const CrearEditarEntidad = async ({
    entidad = "vehiculos",
    objeto = {},
    method = "POST",
    idObjeto = null
}) => {
    try {
        let url = null;
        if (method === 'PUT' && (idObjeto || idObjeto === 0)) {
            url = `${API_URL}/${entidad}/${idObjeto}`;
        }
        else if (method === "POST") {

            url = `${API_URL}/${entidad}`;
        }
        if (!url) {
            throw new Error('No cumple criterios de envio');
        }
        const respuesta = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objeto),
        });
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
};


export const eliminarEntidad = async ({
    entidad = "vehiculos",
    idObjeto = null, }) => {
    try {
        if (idObjeto || idObjeto === 0) {
        const respuesta = await fetch(`${API_URL}/${entidad}/${idObjeto}`, {method: "DELETE"});
        const datos = await respuesta.json();
        return datos;
        }
        throw new Error("idbjeto no puede estar vacio");
    } catch (error) {
        console.log(error);
    }
};

