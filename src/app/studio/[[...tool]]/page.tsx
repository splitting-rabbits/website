import StudioGate from "./StudioGate";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
    const isConfigured = Boolean(
        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
            process.env.NEXT_PUBLIC_SANITY_DATASET,
    );

    return <StudioGate isConfigured={isConfigured} />;
}
