import { createContext, useContext, useMemo, useState } from 'react';
import { isSupabaseConfigured } from '../lib/supabase';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);
const SESSION_KEY = 'pemuda_cup_admin_session';

const readSession = () => {
	try {
		return JSON.parse(localStorage.getItem(SESSION_KEY));
	} catch {
		return null;
	}
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(readSession);

	const value = useMemo(
		() => ({
			user,
			profile: user,
			loading: false,
			configured: isSupabaseConfigured,
			signIn: async (username, password) => {
				const { data, error } = await supabase
					.from('app_users')
					.select('id, username, role, is_active')
					.eq('username', username)
					.eq('password', password)
					.eq('is_active', true)
					.maybeSingle();

				if (error || !data) return { error: error ?? new Error('Username atau password salah.') };

				localStorage.setItem(SESSION_KEY, JSON.stringify(data));
				setUser(data);
				return { error: null };
			},
			signOut: async () => {
				localStorage.removeItem(SESSION_KEY);
				setUser(null);
			},
		}),
		[user],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
