import React from 'react';
import PureData from './src';

export class AppHelpers {
  static slashJoin(arr) {
    var items;
    items = arr.map((item, index) => {
      return <span key={'slash_' + index}>{item.name}</span>;
    });
    return items.join(' / ');
  }
  static mbParams(props, call) {
    let src = new PureData(props, false)[call];
    let params = [];

    src.filters.map((filter, index) =>
      params.push(
        Object.values(src.filters[index])[0]
          ? `&by_${Object.keys(src.filters[index])[0]}=${
              Object.values(src.filters[index])[0]
            }`
          : ''
      )
    );

    let url = params.reduce((acc, cv) => {
      return acc + cv;
    }, src.base);
    return url;
  }
}
