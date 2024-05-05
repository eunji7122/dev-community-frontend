import React from 'react';
import {PageInfo} from "../model/pageInfo";

interface Prop {
    pageInfo: PageInfo
    moveToList: (pageParam: any) => void
}

const Pagination = ({pageInfo, moveToList}: Prop) => {

    const pageNumList = []
    for (let i = 1; i <= pageInfo.totalPages; i++) {
        pageNumList.push(i)
    }

    return (
        <div className="">
            <div className="flex items-center gap-4 justify-center">
                <button disabled={pageInfo.page === 1}
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={() => moveToList({page: pageInfo.page - 1})}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                         stroke="currentColor"
                         aria-hidden="true" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                    Previous
                </button>
                <div className="flex items-center gap-2">
                    {pageNumList.map(item =>
                        <button
                            key={item}
                            className={item === pageInfo.page ? `relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`
                                : `relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                            type="button"
                            onClick={() => moveToList({page: item})}>
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                {item}
                            </span>
                        </button>)
                    }
                </div>
                <button
                    disabled={pageInfo.page === pageInfo.totalPages}
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => moveToList({page: pageInfo.page + 1})}>
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                         stroke="currentColor"
                         aria-hidden="true" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;