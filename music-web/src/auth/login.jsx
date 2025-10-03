// Arquivo: Login.jsx

import { useState, useEffect } from 'react';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setEmail('');
        setPassword('');
        setError('');
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            setError('Preencha todos os campos.');
        } else {
            setError('');
            alert('Login realizado!');
        }
    }

    return (
        // 👇 Este wrapper é o alvo do nosso CSS de centralização
        <div className="login-page-wrapper"> 
            <div className="login-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    {error && <div className="login-error">{error}</div>}
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;