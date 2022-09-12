import React from 'react';

type NoDataProps = {
  Icon: React.JSXElementConstructor<any>;
  message: string;
};

const EmptyData = ({ Icon, message }: NoDataProps) => {
  return (
    <div className="no-data">
      <Icon size={50} />
      <p>{message}</p>
    </div>
  );
};

export default EmptyData;
