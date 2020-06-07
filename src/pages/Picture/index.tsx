import { useParams, RouteComponentProps, withRouter } from 'react-router-dom';
import React, { FC } from 'react';

type Props = {} & RouteComponentProps<{id: string}>;

const Picture: FC<Props> = () => {
  const { id } = useParams();

  return (
    <span>
      picture id:
      {' '}
      {id}
    </span>
  );
};

export default withRouter(Picture);
