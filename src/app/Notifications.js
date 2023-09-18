import React from 'react';

import './css/notifications.css';

class Notifications extends React.Component {
    render() {
        const { notifications } = this.props;

        if (notifications.length === 0) {
            return <p>Pas de nouvelles notifications.</p>;
        }

        return (
            <div className="notifications">
                <h2>Notifications</h2>
                <ul>
                    {notifications.map((notification) => (
                        <li key={notification.id}>
                            <span className="notification-message">{notification.message}</span>
                            <span className="notification-date">{notification.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Notifications;
