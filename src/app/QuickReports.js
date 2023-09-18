import React from 'react';

import './css/quickreports.css';

class QuickReports extends React.Component {
    
    generateReport = (reportType) => {
        // Cette fonction pourrait intégrer une logique pour générer le rapport.
        // Par exemple, elle pourrait faire une requête API pour obtenir les données.
        console.log(`Générant le rapport: ${reportType}`);
        alert(`Le rapport ${reportType} a été généré! (ceci est une simulation)`);
    }

    render() {
        return (
            <div className="quick-reports">
                <h2>Rapports Rapides</h2>
                
                <button onClick={() => this.generateReport('Mensuel')}>
                    Rapport Mensuel
                </button>
                
                <button onClick={() => this.generateReport('Anomalies d\'Audit')}>
                    Rapport des Anomalies d'Audit
                </button>
                
                <button onClick={() => this.generateReport('Progression de Formation')}>
                    Rapport de Progression de Formation
                </button>
            </div>
        );
    }
}

export default QuickReports;
