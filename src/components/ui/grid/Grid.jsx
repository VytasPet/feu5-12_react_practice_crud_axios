import './grid.css';

// Grid
// pakeisti css i styled

// apjuosiantis elementas suteikiantis papildomu stiliaus ar funkciju dalyku
function Grid(props) {
  const inlineStyleObj = {
    // color: 'tomato',
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  };
  return (
    <div style={inlineStyleObj} className={'myGrid'}>
      {props.children}
    </div>
  );
}

// validuoti props
export default Grid;
