import React, { useEffect } from "react";
import { usePage } from "@inertiajs/react";

export default function OrtoComponent({ ortaggi }) {
    // const { ortaggi } = usePage().props;

    return (
        <div>
            {ortaggi.map((ortaggi) => (
                <div key={ortaggi.id}>
                    <p> {ortaggi.name}</p>
                </div>
            ))}
        </div>
    );
}
