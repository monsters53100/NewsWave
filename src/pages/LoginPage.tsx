import React, { useState } from 'react';
import { type LoginData, postNewsletterSubscription } from '../services/authService';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const data: LoginData = { email };
            await postNewsletterSubscription(data);
            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error("Errore durante la POST:", error);
            setStatus('error');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h2 className={styles.title}>Iscriviti alla Newsletter</h2>
                <p className={styles.description}>Ricevi le ultime notizie direttamente nella tua email.</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={styles.submitButton}
                    >
                        {status === 'loading' ? 'Inviando...' : 'Iscriviti Ora'}
                    </button>
                </form>

                {status === 'success' && (
                    <p className={styles.success}>✅ Iscrizione avvenuta con successo!</p>
                )}
                {status === 'error' && (
                    <p className={styles.error}>❌ Errore durante l'invio. Riprova.</p>
                )}
            </div>
        </div>
    );
};

export default LoginPage;