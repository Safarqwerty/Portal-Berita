import { Link, Head } from '@inertiajs/react';

export default function Homepage(params) {
    // console.log('data = ', params.news)
    return (
        <div className='flex flex-wrap justify-center p-4 bg-neutral-800'>
            {params.news ? (
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
            )}
        </div>
    )
}