import React, { useEffect, useState } from "react";
import { elementInViewport } from "../helpers/visibilityHelper";

export const ListWithPagination = ({ listData, action, children }) => {
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 20,
    isLastpage: false,
  });
  const [showLoadMore, setShowLoadMore] = useState(true);

  const getList = () => {
    action().then(({ data }) => {
      listData.set([...data.results]);
      if (data.next) {
        let url = new URL(data.next);
        console.log(url);
        let [offset, limit] = [
          url.searchParams.get("offset"),
          url.searchParams.get("limit"),
        ];
        setPagination({ ...pagination, offset: offset * 1, limit: limit * 1 });
      } else {
        setPagination({ ...pagination, isLastpage: true });
      }
      console.log(data);
    });
  };
  const loadMore = () => {
    if (!pagination.isLastpage) {
      setShowLoadMore(false);
      action(pagination)
        .then(({ data }) => {
          listData.set([...listData.data, ...data.results]);
          console.log("data updated");
          if (data.next) {
            let url = new URL(data.next);
            console.log(url);
            let [offset, limit] = [
              url.searchParams.get("offset"),
              url.searchParams.get("limit"),
            ];
            setPagination({
              ...pagination,
              offset: offset * 1,
              limit: limit * 1,
            });
          } else {
            setPagination({ ...pagination, isLastpage: true });
          }
        })
        .then(() => {
          console.log("loading Done");
          setShowLoadMore(true);
        });
    } else setShowLoadMore(false);
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      {children}
      {showLoadMore && (
        <div
          id="loadMore"
          className="text-center my-5"
          //   style={{ minHeight: "100px" }}
        >
          <button className="btn btn-light u_rounded_2X" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
