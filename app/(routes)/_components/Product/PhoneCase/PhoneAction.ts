"use client";

import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
  ProductType,
} from "@/lib/generated/prisma";
import { prismadb } from "@/lib/prismadb";

export type SaveConfigArgs = {
  casecolor: CaseColor;
  casefinish: CaseFinish;
  casematerial: CaseMaterial;
  casemodel: PhoneModel;
  configId: string;
  type: ProductType;
};

export async function saveConfig({
  casecolor,
  casefinish,
  casematerial,
  casemodel,
  configId,
  type,
}: SaveConfigArgs) {
  await prismadb.configuration.update({
    where: { id: configId },
    data: { caseColor: casecolor, caseFinish: casefinish, caseMaterial: casematerial, caseModel: casemodel, type },
  });
}
