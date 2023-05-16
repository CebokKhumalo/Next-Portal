import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { Form, Input } from 'antd';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Grim Movies</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Hello World</h1>

            <Form>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Title is required',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="surname"
                    label="Surname"
                    rules={[
                        {
                            required: true,
                            message: 'Duration is required',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </>
    );
}