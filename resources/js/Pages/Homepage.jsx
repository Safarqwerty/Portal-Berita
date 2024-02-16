import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(params) {
    // console.log('data = ', params.news)
    return (
        <div className='min-h-screen bg-neutral-800'>
            <Head title={params.title} />
            <Navbar />
            <div className='flex justify-center lg:flex-row lg:flex-wrap flex-col lg:items-stretch gap-4 p-4'>
                <NewsLists news={params.news.data} />
            </div>
            <div className='flex justify-center items-center'>
                <Paginator meta={params.news.meta} />
            </div>
            {/* {params.news ? (
                params.news.map((data, i) => (
                    <div key={i} className="bg-white bg-opacity-10 p-6 rounded-md shadow-md m-4 max-w-sm">
                        <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                        <p className="text-gray-300 mb-1">{data.description}</p>
                        <p className="text-gray-400 mb-1">Category: {data.category}</p>
                        <p className="text-gray-400">Author: {data.author}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-300">Data Kosong</p>
            )} */}
        </div>
    )
}