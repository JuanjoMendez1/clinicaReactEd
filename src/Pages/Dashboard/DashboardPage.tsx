import React, { useState } from 'react'
import Card from '../../components/Card'
import "./dashboard.css"
import { Dashboard } from '../../models/dashboardModel'
import { buscar } from '../../controllers/dashboard'

export function DashboardPage() {
    const [mes, setMes] = useState<string>("")
    const [anio, setAnio] = useState<string>("")
    const [info, setInfo] = useState<Dashboard>()

    const handleBuscar = async()=>{
        try {
            if(mes == "" || anio == ""){
                alert("Debes seleccionar un mes y un año")
                return;
            }
            const busqueda = await buscar(mes, anio)
            setInfo(busqueda)
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <>
    <label>Mes</label>
          <select onChange={(e)=> setMes(e.target.value)}>
              <option value="" disabled selected>Selecciona un mes</option>
              <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
          </select>
    <label>Año</label>
        <select onChange={(e)=> setAnio(e.target.value)}>
          <option value="" disabled selected>Selecciona un año</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
          </select>
          <button onClick={handleBuscar}>Buscar</button>
    <div className="cardDesign">
        <Card title={"Consultas en Bancos"} consultas={info?.bancos.consultas ?? 0} total={info?.bancos.total ?? 0}></Card>
        <Card title={"Pagos Desconocidos"} consultas={info?.unknow.consultas ?? 0} total={info?.unknow.total ?? 0}></Card>
    </div>
    </>
  )
}
