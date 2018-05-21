import * as React from 'react';

export const Check = ({ check, label }) => (
  <div className="flex">
    <div className="b--black ba mv1" style={{ width: '70px' }}>
      <div className="w-100 cf">
        {!check && <div className="w-50 fl bg-red" style={{ height: '25px' }} />}
        {check && <div className="w-50 fr bg-green" style={{ height: '25px' }} />}
      </div>
    </div>
    <div className="fw5 ml2 v-mid pv2">{label}</div>
  </div>
);
