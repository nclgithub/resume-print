"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('/api/about')
        .then(res => res.text())
        .then(setData);
    }, []);

    return (
        <div>
        This is the About Page. <b>{data}</b>
        </div>
    );
}