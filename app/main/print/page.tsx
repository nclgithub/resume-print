"use client";

import { useEffect, useState, useRef } from "react";
import LoadingPage from "./loading";

export default function PrintPage() {
    const [url, setUrl] = useState("../../resume.pdf");
    const [isLoading, setIsLoading] = useState(true);
    const fetchedRef = useRef(false);

    useEffect(() => {
        if (fetchedRef.current) return; // skip duplicate fetch
        fetchedRef.current = true;

        const fetchPdf = async () => {
            setIsLoading(true);
            const res = await fetch("/api/pdf");
            const blob = await res.blob(); // directly get Blob from response
            const blobUrl = URL.createObjectURL(blob);
            setUrl(blobUrl);
            setIsLoading(false);
        };

        fetchPdf();
    }, []);

    if (isLoading) {
        return (
            <LoadingPage />
        );
    }

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <iframe src={url} width="100%" height="100%" />
        </div>
    );
}