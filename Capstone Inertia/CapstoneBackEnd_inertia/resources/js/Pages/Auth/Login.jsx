import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import Layout from "@/Layouts/Layout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import logo_barra from "../../assets/img/logo_barra.png";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Layout>
            <div
                className="col-md-6 col-sm-12 col-lg-3 pt-3 pb-5 mx-auto mt-5 rounded-5 flex flex-column min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                style={{
                    minHeight: "60vh",
                    backgroundColor: "#e8e9eb",
                    boxShadow: "-4px 4px 10px rgba(28, 50, 78, 0.25)",
                    color: "#0a2e36 !important",
                }}
            >
                <Head title="Log in" />

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}
                <div
                    className="d-flex flex-column align-items-center pb-2 mb-3 w-50"
                    style={{ borderBottom: "2px solid #f06543" }}
                >
                    <img src={logo_barra} alt="logo" className="w-50" />
                    <h1 className="text-center fs-2">Accedi</h1>
                </div>

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="ortaggiodetails mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="ortaggiodetails mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="block mt-4 d-flex align-items-center">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                                className="ortaggiodetails"
                            />
                            <span className="ms-2 text-sm text-gray-600">
                                Ricordami
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="loginlink underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Hai dimenticato la password?
                            </Link>
                        )}

                        <PrimaryButton
                            className="loginbutton ms-4"
                            disabled={processing}
                        >
                            Accedi
                        </PrimaryButton>
                    </div>
                    <div className="d-flex flex-column align-items-center mt-4 pt-3 w-70"
                    style={{ borderTop: "2px solid #f06543", fontSize: "0.8rem" }}>
                        <p>Non fai ancora parte di NonnOrto?</p>
                        <span className="loginlink underline" >
                            <Link
                                href={route("register")}
                                className="loginlink"
                            >
                                Registrati qui!
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
