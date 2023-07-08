import { createContext, useState } from "react";
import { useRouter } from "next/router";

/*
export const AuthContext = createContext({} as AuthContextProps);

interface Access {
    role:AuthRole,
    allowedUrls: string[]
}
const restrictedPages:string[] = ["/dispatching", "/locations"]

const access: Access[] = [
    {
        role:"ADMIN",
        allowedUrls:["*"]
    },
    {
        role:"FLEET_MANAGER",
        allowedUrls:["/dispatching"]
    },
    {
        role:"DRIVER",
        allowedUrls:[]
    },
    {
        role:"CUSTOMER",
        allowedUrls:[]
    }
]

export const AuthProvider = ({ children }: ChildContainerProps) => {
    const [data, setData] = useState<Auth | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    const loadStorageData = useCallback(async () => {
        setLoading(true);
        
        try {
            setLoading(true);
            
            const authTokenSerialized = getSession();

            if (!authTokenSerialized) {
                console.debug()
                throw new Error('Authorization token does not exist.');
            }

            if (data) {
                if (isRouteAuth(router.pathname)) {
                    if (getUserRole(data.roles) === "ADMIN" || getUserRole(data.roles) === "FLEET_MANAGER") router.push('/dispatching');
                    else router.push('/profile/settings');
                }
                return;
            }

            const authData: AuthCodeResponse = await authService(authTokenSerialized);
            if (!authData.message || authData.ok === false) {
                throw new Error('Authorization token is expired.');
            }

            const user: Auth = JSON.parse(authData.message);
            setData(user);

            if (isRouteAuth(router.pathname)) {
                router.push('/profile/settings');
            }
        } catch (error) {
            if (isRouteAuth(router.pathname)) {
                return;
            }
            deleteSession();
            router.push('/auth/login');
        } finally {
            setLoading(false);
        }
    }, [router, data]);

    const isAdmin = useCallback(() => {
        if (!data) return false;
        if (getUserRole(data.roles) === 'ADMIN') return true;
        return false;
    }, [data]);

    const hasAccess = useCallback((roles:AuthRole[]|undefined) => {
        if (!data) return false;
        if (roles === undefined) return true;
        if (roles.includes(getUserRole(data.roles))) return true;
        return false;
    }, [data]);

    useEffect(() => {
        if (restrictedPages.includes(router.pathname) && !loading) {
            const userAccess = access.find(item => item.role === getUserRole(data?.roles))?.allowedUrls||[]
            if (userAccess[0] === "*" || userAccess.includes(router.pathname)) return
            router.push('/access-denied');
        }
    }, [router.pathname, isAdmin, router, loading]);

    useEffect(() => {
        setLoading(true);
        loadStorageData();
    }, [loadStorageData]);

    const signOut = async (): Promise<void> => {
        await logoutService();
        setData(null);
        deleteSession();
        console.log('Logging out...');
    };

    const changeAuthData = (_data: Auth) => {
        setData(_data);
    };
    
    return (
        <AuthContext.Provider
            value={{
                data: data,
                loading: loading,
                changeAuthData: changeAuthData,
                isAdmin: isAdmin,
                signOut: signOut,
                hasAccess: hasAccess
            }}
        >
            {loading ? <></>:<>{children}</>}

        </AuthContext.Provider>
    );
};*/