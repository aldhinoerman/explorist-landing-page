"use client";

import { useCallback, useEffect, useState } from "react";
import { requestWithAbort } from "./request";

interface StrapiV5Entity {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  [key: string]: any;
}

interface StrapiV5Response<T> {
  data: T | T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

type StrapiV5Data<T> = T & StrapiV5Entity;

const useRequest = <T>(
  url: string,
  params?: {
    page?: number;
    pageSize?: number;
    param?: string;
  },
  locale: string = "en"
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(
    params?.page && params?.pageSize
      ? { page: params.page, pageSize: params.pageSize }
      : null
  );

  const fetchData = useCallback(() => {
    let urls = `/${url}` + `?locale=${locale}`;

    if (pagination) {
      urls = `/${url}?locale=${locale}&pagination[page]=${
        pagination.page
      }&pagination[pageSize]=${pagination.pageSize}${
        params?.param ? `&${params.param}` : ""
      }`;
    }

    if (params && params?.param && !pagination) {
      urls = `/${url}?locale=${locale}&${params.param}`;
    }

    const { request, controller } = requestWithAbort(urls);

    setLoading(true);

    request
      .then((res: { data: StrapiV5Response<any> }) => {
        setData(() => {
          const responseData = res?.data?.data;
          
          if (Array.isArray(responseData)) {
            return responseData.map((val: any) => ({
              id: val.id,
              documentId: val.documentId,
              createdAt: val.createdAt,
              updatedAt: val.updatedAt,
              publishedAt: val.publishedAt,
              ...val,
            })) as T;
          } else if (responseData) {
            return {
              id: responseData.id,
              documentId: responseData.documentId,
              createdAt: responseData.createdAt,
              updatedAt: responseData.updatedAt,
              publishedAt: responseData.publishedAt,
              ...responseData,
            } as T;
          }
          
          return [] as T;
        });
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") {
          console.log("Request canceled");
        } else {
          setError(err);
          setLoading(false);
        }
      });

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, pagination]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSetPagination = (page: number, pageSize: number) => {
    setPagination({ page, pageSize });
  };

  return { data, error, loading, pagination, handleSetPagination };
};

export default useRequest;
