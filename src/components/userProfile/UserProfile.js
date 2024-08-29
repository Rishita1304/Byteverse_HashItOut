import React, { useEffect, useState } from 'react';
import { FaUser, FaCar, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaVenusMars, FaPhone, FaMoneyBillWave } from 'react-icons/fa';
import { publicRequest } from '../../Request';

const UserProfile = ({ email }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await publicRequest.get(`/auth/profile/${email}`);
        const data = response.data;
        console.log(data) // Axios stores the response data in `response.data`
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfileData();
  }, [email]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>User not found</div>;
  }

  const { user, offers, request: bookedRides } = userData;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>User Profile</h1>
      <div style={styles.mainContent}>
        <div style={styles.userInfo}>
          <h2 style={styles.subHeading}>User Info</h2>
          <div style={styles.infoItem}>
            <FaUser style={styles.icon} /> 
            <span style={styles.label}>Name:</span> <span style={styles.value}>{user.name}</span>
          </div>
          <div style={styles.infoItem}>
            <FaPhone style={styles.icon} /> 
            <span style={styles.label}>Number:</span> <span style={styles.value}>{user.number}</span>
          </div>
          <div style={styles.infoItem}>
            <FaEnvelope style={styles.icon} /> 
            <span style={styles.label}>Email:</span> <span style={styles.value}>{user.email}</span>
          </div>
          <div style={styles.infoItem}>
            <FaVenusMars style={styles.icon} /> 
            <span style={styles.label}>Gender:</span> <span style={styles.value}>{user.gender || 'Male'}</span>
          </div>
          <div style={styles.infoItem}>
            <FaCalendarAlt style={styles.icon} /> 
            <span style={styles.label}>Age:</span> <span style={styles.value}>{user.age ? user.age : 'N/A'}</span>
          </div>
        </div>
        
        <div style={styles.rideInfo}>
          <h2 style={styles.subHeading}>Past Booked Rides</h2>
          <div style={styles.rideContainer}>
            {bookedRides.length > 0 ? (
              bookedRides.map((ride, index) => (
                <div key={index} style={styles.rideItem}>
                  <div style={styles.rideDetail}>
                    <FaMapMarkerAlt style={styles.icon} /> 
                    <span style={styles.label}>Pickup:</span> <span style={styles.value}>{ride.pickup}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <FaMapMarkerAlt style={styles.icon} /> 
                    <span style={styles.label}>Destination:</span> <span style={styles.value}>{ride.destination}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <FaCalendarAlt style={styles.icon} /> 
                    <span style={styles.label}>Date:</span> <span style={styles.value}>{ride.date}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <FaCar style={styles.icon} /> 
                    <span style={styles.label}>Vacancy:</span> <span style={styles.value}>{ride.vacancy}</span>
                  </div>
                </div>
              ))
            ) : (
              <div style={styles.noData}>No booked rides available.</div>
            )}
          </div>

          <h2 style={styles.subHeading}>Rides Offered</h2>
          <div style={styles.rideContainer}>
            {offers.length > 0 ? (
              offers.map((ride, index) => (
                <div key={index} style={styles.rideItem}>
                  <div style={styles.rideDetail}>
                    <FaUser style={styles.icon} /> 
                    <span style={styles.label}>Name:</span> <span style={styles.value}>{ride.name}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <FaMapMarkerAlt style={styles.icon} /> 
                    <span style={styles.label}>Start:</span> <span style={styles.value}>{ride.start}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <FaMapMarkerAlt style={styles.icon} /> 
                    <span style={styles.label}>Destination:</span> <span style={styles.value}>{ride.destination}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <FaCalendarAlt style={styles.icon} /> 
                    <span style={styles.label}>Date:</span> <span style={styles.value}>{ride.date}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <FaCar style={styles.icon} /> 
                    <span style={styles.label}>Time:</span> <span style={styles.value}>{ride.time || 'N/A'}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <FaCar style={styles.icon} /> 
                    <span style={styles.label}>Vacancy:</span> <span style={styles.value}>{ride.vacancy}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <FaMoneyBillWave style={styles.icon} /> 
                    <span style={styles.label}>Price:</span> <span style={styles.value}>${ride.price}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <span style={styles.label}>Type:</span> <span style={styles.value}>{ride.type}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <span style={styles.label}>Rating:</span> <span style={styles.value}>{ride.rating ? ride.rating : 'N/A'}</span>
                  </div>
                  <div style={styles.rideDetail}>
                    <span style={styles.label}>Post:</span> <span style={styles.value}>{ride.post || 'N/A'}</span>
                  </div>
                </div>
              ))
            ) : (
              <div style={styles.noData}>No offered rides available.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#444',
      fontSize: '2em',
      marginBottom: '20px',
    },
    mainContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '20px',
    },
    userInfo: {
      flex: '1',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    rideInfo: {
      flex: '2',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    subHeading: {
      marginBottom: '10px',
      color: '#666',
      fontSize: '1.5em',
      borderBottom: '2px solid #ddd',
      paddingBottom: '10px',
    },
    infoItem: {
      fontSize: '1.1em',
      color: '#333',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      flexBasis: '100px',
      fontWeight: 'bold',
      color: '#555',
    },
    value: {
      flex: 1,
      color: '#333',
    },
    rideContainer: {
      marginTop: '20px',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
    },
    rideItem: {
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      fontSize: '1em',
      color: '#444',
      display: 'grid',
      gap: '10px',
    },
    rideDetail: {
      display: 'flex',
      alignItems: 'center',
    },
    noData: {
      textAlign: 'center',
      color: '#999',
      fontSize: '1.2em',
      padding: '20px',
    },
    icon: {
      marginRight: '8px',
      color: '#888',
    },
  };

export default UserProfile;
