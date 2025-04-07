import { useContext } from 'react';
import { authContext } from './auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const { auth } = useContext(authContext);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleLogout = () => {
    dispatch({ type: 'Logout' }); // إرسال الحدث لتحديث الحالة في السياق
    navigate('/profile'); // توجيه المستخدم إلى صفحة تسجيل الدخول
  };

  return (
    <div>
      {auth.token ? (
        <button onClick={handleLogout} className="btn-logout">
          Log Out
        </button>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}
