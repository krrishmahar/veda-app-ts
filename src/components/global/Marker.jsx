import React from 'react'

const Marker = ({marker}) => {
    return (
        <>
            <div className='flex justify-center '>
                <div className='bg-[#CF484A] text-white font-extrabold text-3xl mt-16 mb-6 py-2 px-8 rounded-full'>{marker}</div>
            </div>
        </>
    )
}

export default Marker
