"use client"
import React from 'react'
import ClientComponent from './ClientComponent'
import { myTask } from '@/app/api/triggers/action'

// import { Form2 } from '@/app/components/Form2'


const page = () => {

    return (
        <>
            <button
                onClick={async () => {
                    await myTask();
                }}
            >
                Trigger my task
            </button>

            <ClientComponent data="hi" data1="hello" />
        </>

    )
}

export default page

