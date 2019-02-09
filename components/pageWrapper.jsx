import React from 'react';
import DocumentTitle from 'react-document-title';

export function pageWrapper(WrappedComponent, t) {
  return class extends React.Component {
    render() {
      return (
        <DocumentTitle title={t.page_title}>
          <WrappedComponent t={t} {...this.props} />
        </DocumentTitle>
      );
    }
  };
}
