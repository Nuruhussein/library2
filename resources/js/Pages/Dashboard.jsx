import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Sidebar from "@/Layouts/sidebar";
import { Head } from "@inertiajs/react";

export default function Dashboard({ children }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="flex">
                <div>
                    {" "}
                    <Sidebar />
                </div>
                <div className="flex-1 p-6 bg-gray-100">{children}</div>
            </div>
        </AuthenticatedLayout>
    );
}
