import React, { useEffect } from "react";
import M from "materialize-css";

export default function LoadingModal({ isOpen }) {
  useEffect(() => {
    let modalInstance;

    if (isOpen) {
      // Abre o modal quando isOpen é true e impede o fechamento clicando fora
      const modalElement = document.getElementById("loading-modal");
      modalInstance = M.Modal.init(modalElement, {
        dismissible: false,
        opacity: 0.9,
      });
      modalInstance.open();
    }

    // Retorna uma função para destruir a instância do modal quando o componente é desmontado
    return () => {
      if (modalInstance) {
        modalInstance.close();
      }
    };
  }, [isOpen]);

  return (
    <div id="loading-modal" className="modal load-modal no-border">
      <div className="modal-content valign-wrapper">
        <div className="book valign-wrapper">
          <div className="inner">
            <div className="left"></div>
            <div className="middle"></div>
            <div className="right"></div>
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <h3>Carregando...</h3>
    </div>
  );
}
