import React, { useState } from 'react';
import './css/compliancecharts.css';

import { Pie, Bar } from 'react-chartjs-2';

import {ArcElement, Chart, CategoryScale, LinearScale, BarElement } from 'chart.js'

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement)

const ComplianceCharts = () => {
    // Utilisation du Hook useState pour gérer les données du graphique
    const [policyData] = useState({
        labels: ['Conforme', 'Non conforme', 'En attente d\'audit'],
        datasets: [{
            data: [60, 25, 15],
            backgroundColor: ['#4CAF50', '#FFC107', '#FF5722'],
        }]
    });

    const [auditData] = useState({
        labels: ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin'],
        datasets: [{
            label: 'Audits réalisés',
            data: [5, 3, 8, 2, 7, 4],
            backgroundColor: '#3f51b5',
        }]
    });

    return (
        <div className="compliance-charts">
            <div className="pie-chart">
                <h3>Répartition des politiques</h3>
                <Pie data={policyData} />
            </div>
            
            <div className="bar-chart">
                <h3>Audits par mois</h3>
                <Bar data={auditData} />
            </div>
        </div>
    );
}

export default ComplianceCharts;
