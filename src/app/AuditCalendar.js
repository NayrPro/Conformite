import React from 'react';
import './css/auditcalendar.css';


class AuditCalendar extends React.Component {
    state = {
        audits: [
            { id: 1, policy: "Politique 101", date: "2023-09-15", auditor: "JDupont" },
            { id: 2, policy: "Politique 102", date: "2023-09-20", auditor: "MLeroux" },
            { id: 3, policy: "Politique 103", date: "2023-09-25", auditor: "BDelacroix" }
        ]
    };

    render() {
        return (
            <div className="audit-calendar">
                <h2>Audits à venir</h2>
                <ul>
                    {this.state.audits.map(audit => (
                        <li key={audit.id}>
                            <strong>Date:</strong> {audit.date} | 
                            <strong>Politique:</strong> {audit.policy} |
                            <strong>Auditeur:</strong> {audit.auditor}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default AuditCalendar;
