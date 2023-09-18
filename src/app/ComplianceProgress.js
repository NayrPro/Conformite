import React from 'react';

// Style pour le composant (pour une meilleure mise en forme, utilisez du CSS externe ou SASS)
const styles = {
    container: {
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: '5px',
        overflow: 'hidden',
        marginBottom: '20px'
    },
    progressBar: (percentage) => ({
        width: `${percentage}%`,
        backgroundColor: percentage > 75 ? '#4caf50' : percentage > 50 ? '#ffc107' : '#f44336',
        padding: '10px',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'right'
    })
};

class ComplianceProgress extends React.Component {
    render() {
        const { percentage } = this.props;

        return (
            <div style={styles.container}>
                <div style={styles.progressBar(percentage)}>
                    {percentage}% de conformité
                </div>
            </div>
        );
    }
}

export default ComplianceProgress;
