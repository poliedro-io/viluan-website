import Button from "@/components/Button";
import Header from "@/components/Header";
import { getService, getServices } from "@/services/ApiService";
import { Service } from "@/types";
import Image from "next/image";

export default function ServicePage({ data }: { data: Service }) {
  const { imageURL, name, description } = data;
  return (
    <div className="section">
      <Header title={name} uppertitle={name} align={"center"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          className="rounded-md"
          src={imageURL || "/default.png"}
          alt={name}
          width="500"
          height="500"
        />
        <div className="flex flex-col">
          <div>
            {description ? (
              <p>{description}</p>
            ) : (
              <p className="text-center">
                <i>No hay información disponible de este servicio</i>
              </p>
            )}
          </div>
          <div className="mt-8">
            <Button block label="Contactar" mode="outline" action="/contacto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getServices().then((items) =>
    items.map(({ id }) => ({ params: { id: String(id) } }))
  );
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const data = await getService(params.id);
  return { props: { data } };
}
