import { useCallback, useEffect, useState } from "react";
import { requestWithAbort } from "./request";

const useRequest = (
  url: string,
  params?: {
    page?: number;
    pageSize?: number;
    param?: string;
  }
) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(
    params?.page && params?.pageSize
      ? { page: params.page, pageSize: params.pageSize }
      : null
  );

  const fetchData = useCallback(() => {
    let urls = url;

    if (pagination) {
      urls = `${url}?pagination[page]=${pagination.page}&pagination[pageSize]=${
        pagination.pageSize
      }${params?.param ? `&${params.param}` : ""}`;
    }

    if (params && params?.param && !pagination) {
      urls = `${url}?${params.param}`;
    }

    const { request, controller } = requestWithAbort(urls);

    setLoading(true);

    request
      .then((res) => {
        setData(() => {
          const response = Array.isArray(res?.data?.data)
            ? res?.data?.data?.map((val: any) => ({
                id: val.id,
                ...val.attributes,
              }))
            : { id: res.data.data.id, ...res?.data?.data?.attributes } || [];

          return response;
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
