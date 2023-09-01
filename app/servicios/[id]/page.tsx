import React from "react";

export default function ServicePage({ params }: { params: { id: string } }) {
  return <p>Post: {params.id}</p>;
}
