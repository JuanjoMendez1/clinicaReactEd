export const buscar = async(mes: string, anio: string)=>{
    try {
        const data = {
            mes: mes,
            anio: anio
        }
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/dashboard/datos`, {              
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: new URLSearchParams(data)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        
    }
}