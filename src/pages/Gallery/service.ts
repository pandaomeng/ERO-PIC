import instance from '../../utils/axios';

export interface Picture {
  picture_id: string;
  thumb_dir: string;
  total_score: string;
}

export const getThumb = (orderType: string, page: number, isR = false): any => {
  const url = isR ? 'R18thumbList' : 'thumbList';
  return instance(`api/${url}/${orderType}/${page}`);
};
