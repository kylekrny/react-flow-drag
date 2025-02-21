import EdgeAddButton from '../Buttons/EdgeAddButton/EdgeAddButton.jsx';

import './Style.scss';
import { getEdgeCenter } from '@xyflow/react';

const [buttonWidth, buttonHeight] = [100, 40];

export const Condition = (props) => {
  const { id, sourceX, sourceY, targetX, targetY, markerEnd, data } = props;

  // Simplified path generation
  const edgePath = `M${sourceX},${sourceY} C${sourceX},${
    (sourceY + targetY) / 2
  } ${targetX},${(sourceY + targetY) / 2} ${targetX},${targetY}`;

  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const { isAddButtonHidden } = data;

  return (
    <>
      <path
        id={id}
        d={edgePath}
        markerEnd={markerEnd}
        className='react-flow__edge-path'
      />
      {isAddButtonHidden ? null : (
        <>
          <foreignObject
            width={buttonWidth}
            height={buttonHeight}
            x={edgeCenterX - buttonWidth / 2}
            y={edgeCenterY - buttonHeight / 2}
            requiredExtensions='http://www.w3.org/1999/xhtml'
          >
            <EdgeAddButton
              {...props}
              onClick={() => console.log('clicked')}
              style={{ width: buttonWidth, height: buttonHeight }}
            />
          </foreignObject>
        </>
      )}
    </>
  );
};
