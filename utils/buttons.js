import React from 'react';
import { Button } from 'reactstrap';

function pureButton(text, link) {
  return (
    <Button size="sm" className="pureButton" href={link} alt={text}>
      {text}
    </Button>
  );
}

export { pureButton };
