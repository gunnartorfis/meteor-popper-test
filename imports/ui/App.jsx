import React from "react";
import { usePopper } from "react-popper";

export const App = () => {
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [arrowElement, setArrowElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  return (
    <div>
      <h1>Popper Meteor Test!</h1>
      <>
        <button type="button" ref={setReferenceElement}>
          Reference element
        </button>

        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          Popper element
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      </>
    </div>
  );
};
