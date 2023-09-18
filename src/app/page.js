'use client'

import './page.module.css'
import './general.css'

import React from 'react';

// Composants fictifs pour l'illustration
import Notifications from './Notifications';
import AuditCalendar from './AuditCalendar';
import ComplianceProgress from './ComplianceProgress';
import QuickReports from './QuickReports';
import SearchBar from './SearchBar';
import ComplianceCharts from './ComplianceCharts';

class Dashboard extends React.Component {
    state = {
        // Données fictives pour l'illustration
        compliancePercentage: 85,
        notifications: [
            { id: 1, message: "Nouvelle régulation ajoutée", date: "2023-09-10" },
            { id: 2, message: "Audit pour Politique 101 terminé", date: "2023-09-08" }
        ]
    };

    render() {
        return (
            <div className="dashboard">
                <h1>Tableau de bord de conformité</h1>
                
                <SearchBar />
                
                <Notifications notifications={this.state.notifications} />
                
                <div className="dashboard-content">
                    <div className="left-panel">
                        <ComplianceProgress percentage={this.state.compliancePercentage} />
                        <AuditCalendar />
                    </div>
                    
                    <div className="right-panel">
                        <QuickReports />
                        <ComplianceCharts />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
