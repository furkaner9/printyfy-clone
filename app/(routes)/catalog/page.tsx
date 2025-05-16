"use client";

import { Progress } from "@/components/ui/progress";
import { UploadButton, useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { on } from "events";
import { get } from "http";
import { ImageIcon, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { use, useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { toast, useSonner } from "sonner";
import { set } from "zod";

const CatalogPage = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadprogress, setUploadProgress] = useState<number>(0);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId;
      startTransition(() => {
        router.push(`/catalog/${configId}`);
      });
    },
    onUploadProgress: (p) => {
      setUploadProgress(p);
    },
  });
  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { configId: undefined });
    setIsDragOver(false);
  };
  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;
    setIsDragOver(false);
    toast.error(
      `${file.file.type} type is not supported. Please upload a png or jpg file`
    );
  };

  return (
    <div className="container mx-auto">
      <div
        className={cn(
          "relative h-[500px] flex-1 my-16 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
          {
            "ring-blue-900/25 bg-blue-900/10": isDragOver,
          }
        )}
      >
        <div className="relative flex flex-1 flex-col items-center justify-center w-full">
          <Dropzone
            onDropAccepted={onDropAccepted}
            onDropRejected={onDropRejected}
            accept={{
              "image/png": [".png"],
              "image/jpeg": [".jpeg"],
              "image/jpg": [".jpg"],
            }}
            onDragEnter={() => setIsDragOver(true)}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                className="h-full w-full flex flex-col items-center justify-center"
                {...getRootProps()}
              >
                <input {...getInputProps()} />

                {isDragOver ? (
                  <MousePointerSquareDashed className="h-6 text-zinc-500 mb-2" />
                ) : isUploading || isPending ? (
                  <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
                ) : (
                  <ImageIcon
                    className="h-6 w-6 text-zinc-500
                 mb-2"
                  />
                )}
                <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                  {isUploading ? (
                    <div className="flex flex-col items-center">
                      <p>Uploading</p>
                      <Progress
                        value={uploadprogress}
                        className="mt-4 w-44 bg-gray-400"
                      />
                    </div>
                  ) : isPending ? (
                    <div className="flex flex-col items-center">
                      <p>Redirecting plase wait</p>
                    </div>
                  ) : isDragOver ? (
                    <div className="flex flex-col items-center">
                      <p>Drop File</p>
                    </div>
                  ) : (
                    <div>Click or drag and drop to upload</div>
                  )}

                  {isUploading ? null : <p>Png or Jpg</p>}
                </div>
              </div>
            )}
          </Dropzone>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
