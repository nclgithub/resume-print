"use client";

import { useRouter } from 'next/router';

export default function PrintPage() {
    const router = useRouter();
    const { data } = router.query;
    const src = Array.isArray(data) ? data[0] : (data || '');

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <iframe src={src} width="100%" height="100%" />
        </div>
    );
}