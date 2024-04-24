import Layout from "@/Layouts/Layout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import logo_barra from "../../assets/img/logo_barra.png";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <Layout>
            <div
                className="pt-3 col-md-6 col-sm-12 col-lg-3 mx-auto mt-5 rounded-5 w-full sm:max-w-md mt-6 px-6 py-4 overflow-hidden sm:rounded-lg d-flex flex-column min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                style={{
                    minHeight: "50vh",
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
                    <h1 className="text-center fs-2">Password dimenticata?</h1>
                </div>

                <div className="px-1 pb-3">
                    <p className="text-center">
                        {/* No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one. */}
                        Nessun problema! <br />
                        Inserisci la tua email e ti invieremo un'email con il
                        link che ti consentirà di impostare una nuova password!
                    </p>
                </div>

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="px-5 pb-5">
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="ortaggiodetails mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <div className="flex items-center justify-center mt-4">
                        <PrimaryButton
                            className="w-100 loginbutton"
                            disabled={processing}
                        >
                            Clicca qui per resettare la password
                        </PrimaryButton>
                    </div>
                </form>
            </div>
            <Head title="Forgot Password" />
        </Layout>
    );
}
