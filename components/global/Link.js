import NextLink from "next/link";

export default function Link({ href, label }) {
    return (
        <p><NextLink href={href}>{label}</NextLink></p>
    )
}