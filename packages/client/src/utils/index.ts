import { type SortOrder } from 'antd/es/table/interface';

interface TransformPaginationOption {
  current?: number;
  pageSize?: number;
}
/** antd-pro-table 分页参数格式化 */
export function transformPagination({ current = 1, pageSize = 10 }: TransformPaginationOption) {
  return {
    current,
    page_size: pageSize,
  };
}

const ORDER_ENUM = {
  descend: 'DESC',
  ascend: 'ASC',
};

export function transformSort(sort: Record<string, SortOrder>) {
  const res = Object.entries(sort).map(([key, value]) => {
    if (!value) return {};
    return {
      order_key: key,
      order_type: ORDER_ENUM[value],
    };
  });

  return res[0];
}

/** 计算冗余数 */
export function redundancyCount(len: number) {
  if (len <= 4) {
    return 1;
  }
  if (len > 4 && len <= 9) {
    return 2;
  }
  if (len > 9 && len <= 14) {
    return 3;
  }
  return 4;
}
