import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            KAMU BERHASIL LOGIN !
                        </div>
                    </div>
                </div>
            </div>          

            <div className="py-2">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <p>lorem ipsum dolores usum katiga pancaraoba perubahan 
                            beberapa musim mulai dari hujan angin , hujan es, hujan lambung dan sebagainya
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>          
        </AuthenticatedLayout>
    );
}
