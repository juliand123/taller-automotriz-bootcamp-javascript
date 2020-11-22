import React, {useState, useEffect} from "react";
import Select from "../Select";
import Input from "../Input";

function ComponenteCampo({
    manejarInput = () => { },
    objeto = {},
    nombreCampo = "",
    options = {},
}) {
//const[options, setOptions] = useState(opcionesIniciales);
//useEffect(()=>{}, []);


    switch (nombreCampo) {
        case 'tipoidentificacion':
        case 'diagnostico':
        case 'tipovehiculo':
        case 'tipopropietario':
        case 'vehiculo':
        case 'mecanico':
            return (
                <div className="form-row">
                    {options[nombreCampo].length > 0 ? (
                     <Select
                        nombreCampo={nombreCampo}
                        options={options[nombreCampo]}
                        onChange={manejarInput}
                        placeholder={nombreCampo}
                        value={objeto[nombreCampo]}
                    />
                    ) : "cargando opciones..." }
                </div>
            );
        case 'historia':
        case 'identificacion':
        case 'nombre':
        case 'apellido':
        case 'pais':
        case 'marca':
        case 'linea':
            return (
                <Input
                    nombreCampo={nombreCampo}
                    tipo="text"
                    onInput={manejarInput}
                    placeholder={nombreCampo}
                    value={objeto.[nombreCampo]}
                />
            );
        default:
            return false;
    }
};

export default ComponenteCampo;