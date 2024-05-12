"use client"
import CommunityDetails from "@/components/community/CommunityDetails";
import Navigation from "@/components/landing-page/Navigation";
import React from "react";
import { useParams } from 'next/navigation'
const ThreadDetails = () => {
    const { id } = useParams() as { id: string };
    return (
        <>
            <Navigation />
            <CommunityDetails id={id} />
        </>
    );
}

export default ThreadDetails;
