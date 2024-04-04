import Layout from "../layouts/layout";
import SearchBar from "../components/search-bar";

export default function Main() {
    return (
        <Layout>

            <div className="my-6 w-1/2 m-auto">
                <SearchBar/>
            </div>

            <div className="my-12 flex flex-col gap-x-10 gap-y-10 sm:my-8 md:flex-row">
                <div className="w-full">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <caption className="pb-3 text-lg font-semibold text-center rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                Q/A
                            </caption>
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="w-1/2 px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="w-1/3 px-6 py-3">
                                    Author
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Like
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    View
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    질문1
                                </th>
                                <td className="px-6 py-4">
                                    글쓴이1
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    1
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    질문2
                                </th>
                                <td className="px-6 py-4">
                                    글쓴이2
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    1
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    질문3
                                </th>
                                <td className="px-6 py-4">
                                    글쓴이3
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    1
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-full">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <caption className="pb-3 text-lg font-semibold text-center rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                COMMUNITY
                            </caption>
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="w-1/2 px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="w-1/3 px-6 py-3">
                                    Author
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Like
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    View
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    질문1
                                </th>
                                <td className="px-6 py-4">
                                    글쓴이1
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    1
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    질문2
                                </th>
                                <td className="px-6 py-4">
                                    글쓴이2
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    1
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    질문3
                                </th>
                                <td className="px-6 py-4">
                                    글쓴이3
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    1
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Layout>


    )
}