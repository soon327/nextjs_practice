import React from 'react';
import { callApi } from '../src/api';

page2.getInitialProps = async ({ query }) => {
  const text = query.text || 'none';
  const data = await callApi();
  return { text, data };
};

export default function page2({ text, data }) {
  return (
    <div>
      <p>this is page2 for studing getInitialProps</p>
      <p>{`text: ${text}`}</p>
      <p>{`data: ${data}`}</p>
    </div>
  );
}
