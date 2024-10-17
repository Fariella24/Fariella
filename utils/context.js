import React, { useContext, useState } from 'react';

// Definiamo il context
export const SessionContext = React.createContext({});

// Funzione che ritorna i dati dal context
export function useSessionContext() {
    return useContext(SessionContext);
}

// Context definitivo
function SessionProvider({ children }) {
    const [session, setSession] = useState();

    const posts = [
        {
            nome: 'Fariella',
            image: 'https://media.licdn.com/dms/image/v2/C5603AQGlVaf3ehx_JA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1531113902583?e=2147483647&v=beta&t=itHrFrQPzwDdUv2dY5rZAtFY3rBPb1nqo9dVLRHp0jY',
            description: 'Urinario di Duchamp'
        },
        {
            nome: 'Fariella',
            image: 'https://artslife.com/history/wp-content/uploads/2017/12/history-futurismo-6.jpg',
            description: 'Luigi Russolo- Rumorismo'

        }
    ]




    const username = "salsa"
    const data = {
        // name: username,
        // age: 69,
        // session: session,
        // setSession: setSession,
        posts: posts
    }
    return (
        <SessionContext.Provider value={data}>
            {children}
        </SessionContext.Provider>
    )
}

// export del context
export default SessionProvider;