import { prismadb } from "@/lib/prismadb";
import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
  ProductType,
} from "@prisma/client";

export interface SaveConfigArgs {
  type?: string;
  caseColor?: string;
  caseModel?: string;
  caseMaterial?: string;
  caseFinish?: string;
  size?: string;
  tshirtcolor?: string;
  mugColor?: string;
  width: number;
  height: number;
  imageUrl: string;
  croppedImageUrl?: string | null; // Upload sonrası URL buraya gelir
}

export async function _saveConfig(args: SaveConfigArgs) {
  const response = await fetch("/api/save-config", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to save config: ${errorText}`);
  }

  return response.json();
}
