import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import "./Resultado.css";

const Resultado = () => {
  const location = useLocation();
  const { 
    sueldoProporcional = 0, 
    vacacionesProporcionales = 0, 
    prima = 0, 
    indemnizacion = 0, 
    totalLiquidacion = 0 
  } = location.state || {};

  return (
      <section>
      <div className="barraFija">
        <Header />
      </div>
      <h1>Resultado de Liquidación</h1>
      <table className="tablaResultado"  style={tableStyles}>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salario proporcional</td>
            <td>${sueldoProporcional.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Vacaciones proporcionales</td>
            <td>${vacacionesProporcionales.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Prima</td>
            <td>${prima.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Indemnización</td>
            <td>${indemnizacion.toLocaleString()}</td>
          </tr>
          <tr>
            <td>
              <strong>Total Liquidación</strong>
            </td>
            <td>
              <strong>${totalLiquidacion.toLocaleString()}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      </section>
  );
};

const tableStyles = {
  width: "100%",
  borderCollapse: "collapse",
  textAlign: "left",
  marginTop: "150px",
};

export default Resultado;
