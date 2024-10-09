// // components/LogoutButton.js
// import React from 'react';
// import UseLogout from '../auth/Userlogout';
// import { useNavigate } from 'react-router-dom';

// const LogoutButton = () => {
//   const { logout, isLoading } = UseLogout();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     navigate('/login'); // or wherever you want to redirect after logout
//   };

//   return (
//     <button 
//       onClick={handleLogout} 
//       disabled={isLoading}
//       className="logout-button"
//     >
//       {isLoading ? 'Logging out...' : 'Logout'}
//     </button>
//   );
// };

// export default LogoutButton;