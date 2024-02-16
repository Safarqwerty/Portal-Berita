const isNews = (news) => {
    return news.map((data, i) => {
        return <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{data.description}</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{data.category}</div>
                    <div className="badge badge-inline">{data.author}</div>
                </div>
            </div>
        </div>
    })
}

const noNews = () => {
    return (
        <div>No News Found.</div>
    )
}

const NewsLists = ({ news }) => {
    // console.log('datanya: ', news)
    if (!news || !news.length) return noNews(); // Menangani news yang null atau memiliki panjang 0
    return isNews(news);
}

export default NewsLists