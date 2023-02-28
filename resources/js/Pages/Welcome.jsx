import { Link, Head } from '@inertiajs/react';
import New from './New';


export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />

            <div className="">
                <div className="sm:top-0 sm:right-0 p-3 text-right">
                    {props.auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold dark:text-black hover:text-red-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div>
                            <Link
                                href={route('login')}
                                className="p-2 rounded outline outline-1 outline-blue-400 hover:bg-blue-600 hover:text-white"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 p-2 rounded outline outline-1 outline-blue-400 hover:bg-blue-600 hover:text-white"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
                <div className="container m-3">
                    <div className="columns-3">
                        <div>asd</div>
                        <div>asd</div>
                    </div>
                    <New name="Jessie" last="Caminos"/>
                </div>
            </div>
            
        </>
    );
}
