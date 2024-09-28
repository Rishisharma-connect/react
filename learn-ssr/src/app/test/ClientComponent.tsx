"use client"

import React from 'react'
import { Props } from '@/types/types'
import { useServerData } from '@/app/hooks/useServerData';
import { useActionData } from '@/app/hooks/useActionData';
import { createUser } from '@/app/server/createUser';
// import Form from '@/app/components/Form';


const ClientComponent = (props: Props): JSX.Element => {

    const { data, error, isLoading } = useServerData();
    const { data: data1, error: error1, isLoading: isLoading1 } = useActionData();

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error: {error.message}</p>

    if (isLoading1) return <p>Loading...</p>

    if (error1) return <p>Error: {error1.message}</p>

    console.log(data)

    console.log(data1?.name)

    const sayHello = () => {
        alert("Hello!")
        createUser({ firstName: "John", lastName: "Doe", email: "sdadadasd@asa.com", password: "dsadasdasda", confirmPassword: "dsadasdasda", terms: true })
    };


    return (
        <>
            {/* <div className="max-w-xl mx-auto w-full">
                <div className="flex justify-center my-12">
                    <div className="w-full lg:w-11/12 bg-white p-5 rounded-lg shadow-xl">
                        <h3 className="pt-4 text-2xl text-center font-bold">
                            Create New Account
                        </h3>
                        <Form />
                    </div>
                </div>
            </div> */}
            <button onClick={sayHello}>Click me</button>
            <div>
                <h1>Server Data</h1>
                <p>{data?.body}</p>
                <p>{data?.id}</p>
                <p>{data?.title}</p>
            </div>
            <div>
                <h1>Action Data</h1>
                <p>{data1?.name}</p>
                <p>{data1?.age}</p>
            </div>

            <h1>Client Data</h1>
            <div>ClientComponent data={props.data} data1={props.data1}</div>
        </>
    )

}

export default ClientComponent