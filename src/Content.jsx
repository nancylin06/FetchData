import React, { useEffect, useState } from "react";

export default function Content() {
    const [product, setProduct] = useState()
    const [apidata, setData] = useState(null)

    function optionsChanged(e) {
        setProduct(e.target.value)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?title=${product}`)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [product])

    return (
        <main className="justify-center items-center flex w-full h-screen font-medium">
            <div className="container w-[30rem] bg-cyan-50 flex flex-col p-5 space-y-10">
                <form>
                    <select name="allNames" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 block w-full rounded-md sm:text-sm focus:ring-1 tracking-widest text-4xl" value={product} onChange={optionsChanged}>
                        <option value="qui est esse">qui est esse</option>
                        <option value="eveniet quod temporibus">eveniet quod temporibus</option>
                        <option value="est et quae odit qui non">est et quae odit qui non</option>
                        <option value="magnam ut rerum iure">magnam ut rerum iure</option>
                        <option value="non est facere">non est facere</option>
                        <option value="sed ab est est">sed ab est est</option>
                    </select>
                </form>
                {apidata &&
                    apidata.map((output) => {
                        return (
                            <div className="w-full h-full bg-blue-50 rounded-lg flex flex-col space-y-2 tracking-widest border-2 border-cyan-600">
                                <div className="bg-cyan-500 h-16 pl-5 rounded-t-md flex items-center">
                                    <h1 className="text-lg">{output.title}</h1>
                                </div>
                                <div className="p-5 flex flex-col space-y-10">
                                    <p>{output.body}</p>
                                    <div className="bg-cyan-400 rounded-2xl w-32 px-2 text-lg">user ID : {output.userId}</div>
                                </div>
                            </div>
                        )
                    }
                    )}
            </div>
        </main>
    )
}