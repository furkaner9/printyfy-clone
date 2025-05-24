import { products } from "@/app/contains";
import { prismadb } from "@/lib/prismadb";
import { isValidObjectId } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface ConfigPageProps {
  params: Promise<{
    configId: string;
  }>;
}

const ConfigPage = async ({ params }: ConfigPageProps) => {
  const { configId } = await params;

  if (!isValidObjectId(configId)) {
    return notFound();
  }

  const configrations = await prismadb.configuration.findUnique({
    where: {
      id: configId,
    },
  });

  if (!configrations) {
    return notFound();
  }

  return (
    <div className="container mx-auto">
      <div className="relative h-[800px] md:h-[500px] flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-8">
          {products.map((product) => (
            <Link
              href={`/catalog/${configId}/${product.href}`}
              key={product.id}
              className="flex flex-col gap-4 group"
            >
              <Image
                alt={product.title}
                src={product.image}
                width={500}
                height={500}
                className="w-36 h-auto brightness-50 rounded-xl group-hover:brightness-100 transition duration-1000"
              />
              <div>
                <p className="text-center font-semibold">{product.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConfigPage;
