import React from 'react';
import { useQuery, gql } from '@apollo/client';

const HELLO_QUERY = gql`
  query Greet {
    hello
  }
`;

export default () => {
  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading)
    return (
      <div>
        <p>hello loading... from graphene, apollo and django</p>
      </div>
    );
  if (error)
    return (
      <div>
        <p>hello error :(</p>
      </div>
    );

  console.log(data);

  return (
    <div>
      <p>hello {data.hello} from graphene, apollo and django</p>
    </div>
  );
};
