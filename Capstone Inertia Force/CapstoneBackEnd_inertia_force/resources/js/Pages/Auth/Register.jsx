import { useEffect } from "react";
import Layout from "@/Layouts/Layout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import logo_barra from "../../assets/img/logo_barra.png";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Layout>
            <div
                className="pt-3 pb-5 col-md-6 col-sm-12 col-lg-3 mx-auto mt-5 rounded-5 flex flex-column min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                style={{
                    minHeight: "60vh",
                    backgroundColor: "#e8e9eb",
                    boxShadow: "-4px 4px 10px rgba(28, 50, 78, 0.25)",
                    color: "#0a2e36 !important",
                }}
            >
                <div
                    className="d-flex flex-column align-items-center pb-2 mb-3 w-50"
                    style={{ borderBottom: "2px solid #f06543" }}
                >
                    <img src={logo_barra} alt="logo" className="w-50" />
                    <h1 className="text-center fs-2">Registrati</h1>
                </div>
                <Head title="Register" />

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Nome" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="ortaggiodetails mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="ortaggiodetails mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
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
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Conferma Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="ortaggiodetails mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route("login")}
                            className="loginlink underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Già registrato?
                        </Link>

                        <PrimaryButton className="loginbutton ms-4" disabled={processing}>
                            Registrati
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
